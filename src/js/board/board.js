let five = nw.require('johnny-five');
let SerialPort = nw.require('browser-serialport');
let fs = nw.require('fs');

import DeviceSettings from './../board/settings';
import FileSystem from './filesystem';

import Util from './../util';

class Arduino {
    board;
    constructor() {
        let self = this;
        let player = document.querySelector('#myAudio');
        player.volume = 0.5;
        player.addEventListener('ended', () => {
            console.log('player ended');
            this.mutepin.low();
            this.isPlaying = false;
            this.melodyIndex++;
            if (this.melodyIndex >= this.files.length)
                this.melodyIndex = 0;
            // if (this.canGoHome) this.goHome();
            self.isMotorHome().then(()=>{
                self.motorPosition = 0;
                self.lightOff();
                self.motorpin.high();
                // self.mutepin.low();
                setTimeout(()=>{
                    this.timeoutPassed = true;
                },parseInt(DeviceSettings.get('WAITING_TIME')));
            });
        });
        this.canGoHome = false;
        this.isMoving = true;
        this.motorPosition = 0;
        this.routineInProgress = false;
        this.player = player;
        this.melodyIndex = 0;
        this.timeoutPassed = true;//for pause detection
        // add cleanup if window closes
        nw.Window.get().on('close', function () {
            self.stopProcedure().then(() => this.close(true));
            // this.close(true);
        })
    }
    detectArduinoPort() {
        return new Promise((resolve) => {
            let p = '';
            SerialPort.list(function (err, ports) {
                ports.forEach(function (port) {
                    if (port.comName != 'COM1') {
                        resolve(port.comName);
                    }
                });
                //resolve();
            });
        });
    }
    initialize() {
        let self = this;
        return new Promise((resolve, reject) => {
            this.listFiles();
            this.detectArduinoPort().then((com) => {
                var board = new five.Board({
                    port: com,
                    repl: false
                });
                this.board = board;
                board.on("ready", function () {
                    self.mutepin = new five.Pin(11);
                    self.motorpin = new five.Pin(6);
                    self.ledpin = new five.Pin(20);
                    self.zeropin = new five.Pin('A0');
                    self.movepin = new five.Pin('A8');
                    self.stepper = new five.Stepper({
                        type: five.Stepper.TYPE.DRIVER,
                        stepsPerRev: 400,
                        pins: {
                            step: 4,
                            dir: 5
                        }
                    });
                    self.mutepin.low();
                    self.motorpin.high();
                    
                    self.zeropin.read(function (error, value) {
                         self.zeroPinValue = value;
                         if (value > 500 && !self.routineInProgress) {
                            if(!self.motorOn) {
                                self.motorpin.low() ;
                                self.motorOn = true;
                            }
                            self.move(0, 100, self.homespeed, 0, 0);
                         }else{
                             if(self.motorOn){
                                self.motorpin.high();
                                self.motorOn = false;
                             }
                         }
                    });

                    resolve();
                });
            });
        });
    }

    readVoltage() {
        return new Promise((resolve) => {
            let volts = '0';
            let amps = '0';
            var pinv = new five.Pin("A1");
            var pina = new five.Pin("A9");
            pinv.query(function (state) {
                volts = state.value;
                pina.query(function (state) {
                    amps = state.value;
                    resolve({ volts, amps });
                });
            });
            resolve({ volts, amps });
        });

    }
    move(dir, steps, speed, accel, decel,timeout) {
        if(!timeout) timeout = 0;
        return new Promise((resolve) => {
            setTimeout(()=>{
                this.motorIsMoving = true;
                this.stepper.step({
                    steps: steps,
                    direction: dir,
                    rpm: speed,
                    accel: accel,
                    decel: decel
                }
                , () => {
                    this.motorPosition = dir === 0 ? this.motorPosition - steps : this.motorPosition + steps;
                    this.motorIsMoving = false;
                    resolve();
                });
            },timeout);
        });
    }

    goHome() {
        this.mutepin.low();
        this.routineInProgress = false;
        return;
        let self = this;
        // while(self.zeroPinValue >500){
        //     self.move(0,100,300,0,0);
        // }
        if (self.zeroPinValue < 800) {
            self.motorPosition = 0;
            self.routineInProgress = false;
            return;
        } else {
            let pos;
            this.motorpin.low();
            this.stepper.step({
                rpm: 700,
                direction: 0,
                steps: self.motorPosition,
                accel: 10000,
                decel: 3000
            }, () => {
                self.motorPosition = 0;
                self.motorpin.high();
                self.lightOff();
                self.routineInProgress = false;
                console.log('motor is home');
            });
        }
        //console.log(value);
    }
    forceHome() {
        this.routineInProgress = false;
    }
    extendMax() {
        return new Promise((resolve) => {
            let self = this;
            self.routineInProgress = true;
            this.stepper.rpm(800).cw().accel(0).decel(0).step(parseInt(DeviceSettings.get('RANGE_MAX_POSITION')), () => {
                self.motorPosition = parseInt(DeviceSettings.get('RANGE_MAX_POSITION'));
                console.log('motor extended');
                resolve();
            });
        });
    }

    bounce() {
        let self = this;
        let dir = 0;
        let speed = 400;
        let steps = parseInt(DeviceSettings.get('SWING_MAX_RETRACT'));
        self.move(dir, steps, speed, 0, 0).then(() => {
            dir = dir === 0 ? 1 : 0;
            if (self.isPlaying) {
                self.move(dir, steps, speed, 0, 0).then(() => {
                    if (self.isPlaying) self.bounce();
                    else {
                        console.log('should go home');
                        self.goHome();
                    }
                });
            } else {
                console.log('should go home');
                self.goHome();
            }
        });
    }
    bounceRandom() {
        let self = this;
        let dir = 0;
        let speed = 400;
        let steps = Math.round(Math.random() * 1000);
        if (steps < 200) steps += 200;
        self.move(dir, steps, speed, 0, 0).then(() => {
            dir = dir === 0 ? 1 : 0;
            if (self.isPlaying) {
                self.move(dir, steps, speed, 0, 0).then(() => {
                    if (self.isPlaying) self.bounceRandom();
                    else self.goHome();
                });
            } else {
                self.goHome();
            }
        });
    }

    patternMove() {
            let self = this;
            let patterns = DeviceSettings.getPatterns();
            let playingFile = this.files[this.melodyIndex];
            let pattern = patterns.find((p) => { return p.filename == playingFile });
            let sets = pattern.pattern;
            let chain = Promise.resolve();
            let commands = [];
            for (let index = 0; index < sets.length; index++) {
                const p = sets[index];
                let delay = p.pause;
                let steps = Math.abs(Number(p.distance));
                let dir = Number(p.distance) >= 0 ? 1 : 0;  
                console.log(index);    
                commands.push(self.move.bind(self,dir,steps,400,0,0,delay));          
            }
            for(const func of commands){
                chain = chain.then(func); 
            }
           this.isDonePlaying().then(()=>{
               this.goHome();
           });
    }

    mockMove(dir, steps, speed, accel, decel) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Dir:' + dir);
                console.log('Steps:' + steps);
                console.log('Speed:' + speed);
                resolve();
            }, 3000);
        });
    }

    

    listFiles() {
        let self = this;
        this.files = [];
        return new Promise((resolve) => {
            fs.readdir('C:/Device/Files', (err, f) => {
                f.forEach(file => {
                    console.log(file);
                    self.files.push(file);
                });
                resolve();
            });
        });
    }

    playFile(index) {
        this.mutepin.high()
        this.player.src = 'C:/Device/Files/' + this.files[index];
        this.player.play();
    }

    /**
     * RTC
     */
    readRTC() {
        return new Promise((resolve) => {

            this.board.i2cConfig();
            this.board.i2cReadOnce(0x68, 0x00, 7, function (res) {
                var sec = (res[0] >> 4) * 10 + (res[0] & 0x0F); 				// seconds	
                var min = (res[1] >> 4) * 10 + (res[1] & 0x0F); 				// minutes	
                var hour = ((res[2] & 0x30) >> 4) * 10 + (res[2] & 0x0F); 	// hours	
                var mode = (res[2] & 0x40) >> 6 ? "12h" : "24h"; 			// hour mode default 24
                var day = res[3];											// day of week
                var mday = (res[4] >> 4) * 10 + (res[4] & 0x0F); 				// day of month
                var month = ((res[5] & 0x10) >> 4) * 10 + (res[5] & 0x0F);	// month
                var year = (res[6] >> 4) * 10 + (res[6] & 0x0F);				// year
                resolve(new Date(2000 + year, --month, mday, hour, min, sec));
            });
        });

    }

    writeRTC() {
        let datetime = new Date();
        var bytes = [];
        bytes[0] = Math.floor(datetime.getSeconds() / 10) << 4 | datetime.getSeconds() % 10;
        bytes[1] = Math.floor(datetime.getMinutes() / 10) << 4 | datetime.getMinutes() % 10;
        bytes[2] = Math.floor(datetime.getHours() / 10) << 4 | datetime.getHours() % 10;
        bytes[3] = datetime.getDay() + 1;
        bytes[4] = Math.floor(datetime.getDate() / 10) << 4 | datetime.getDate() % 10;
        var month = datetime.getMonth() + 1;
        bytes[5] = Math.floor(month / 10) << 4 | month % 10;
        var year = datetime.getYear() % 100;
        bytes[6] = Math.floor(year / 10) << 4 | year % 10;
        this.board.i2cConfig();
        this.board.i2cWrite(0x68, 0x00, bytes);
    }

    alterRegister(register, mask, clearSet) {

        var byte = mask;
        this.board.i2cConfig();
        this.board.i2cReadOnce(0x68,register, register+1, function(err, res) {
    
            if(clearSet == "clear")
    
                byte &= res[0];
    
            else
    
                byte |= res[0];
    
        });
    
        this.board.i2cWrite(0x68,register, [ byte ]);
    }
    disableAlarmOne(){
        this.alterRegister(0x0E, 0xFE, "clear");
    }
    enableAlarmOne() {
        this.alterRegister(0x0E, 0x01, "set");
    }
    setAlarmOne(datetime) {
        // let ppin = new five.Pin(12);
        // ppin.low();
        let self = this;
        if(!datetime instanceof Date) throw new Error();
        var bytes = []; 
        this.board.i2cConfig();
        // this.board.i2cReadOnce(0x68, 0x07, 4, function(err, res) {
        //     bytes[0] = res[0] & 0x80;
        //     bytes[1] = res[1] & 0x80;
        //     bytes[2] = res[2] & 0x80;
        //     bytes[3] = res[3] & 0x80;    
            bytes[0] |= Math.floor(datetime.getSeconds()/10) << 4 | datetime.getSeconds()%10;
            bytes[1] |= Math.floor(datetime.getMinutes()/10) << 4 | datetime.getMinutes()%10;
            bytes[2] |= Math.floor(datetime.getHours()/10) << 4 | datetime.getHours()%10;
            bytes[3] |= Math.floor(datetime.getDate()/10) << 4 | datetime.getDate()%10;
            console.log(bytes);
            // self.board.i2cConfig();
            self.board.i2cWrite(0x68, 0x07, bytes); 
            self.board.i2cWrite(0x68,0x0E,[0xFE]) ; 
        // });
    };
    /**
     * ROUTINES
     */
    runInOutRoutine(){
        this.motorpin.low();
        this.extendMax().then(() => {
           if(DeviceSettings.get('USE_BLITZ')) this.blinkLED();
        });
        this.playFile(this.melodyIndex);
        this.isPlaying = true;
        this.isDonePlaying().then(()=>{
            this.goHome();
        });
    }
    runRoutine() {
        this.motorpin.low();
        this.extendMax().then(() => {
            if(DeviceSettings.get('USE_BLITZ')) this.blinkLED();
            this.bounce();
        });
        this.playFile(this.melodyIndex);
        this.isPlaying = true;
    }
    runRandomRoutine() {
        this.motorpin.low();
        this.extendMax().then(() => {
            if(DeviceSettings.get('USE_BLITZ')) this.blinkLED();
            this.bounceRandom();
        });
        this.playFile(this.melodyIndex);
        this.isPlaying = true;
    }
    runPatternRoutine() {
        this.motorpin.low();
        this.extendMax().then(() => {
            if(DeviceSettings.get('USE_BLITZ')) this.blinkLED();
            this.patternMove();
        });
        this.playFile(this.melodyIndex);
        this.isPlaying = true;
    }

    /**
     * LIGHT ROUTINES
     */
    blinkLED(){
        let count = parseInt(DeviceSettings.get('BLITZ_COUNT'));
        if(count > 1){
            let state = true;
            let interval = parseInt(DeviceSettings.get('BLITZ_DELAY'));
            this.lightInterval = setInterval(()=>{
                if(state){
                    this.ledpin.high();
                    state = !state
                }else{
                    this.ledpin.low();
                    state = !state;
                }
            },interval);
        }else{
            this.lightOn();
        }
    }

    lightOn() {
        return new Promise(() => {
            this.ledpin.high(() => {
                resolve();
            });
        });
    }

    lightOff() {
        return new Promise((resolve) => {
            this.ledpin.low();
            if(this.lightInterval){
                clearInterval(this.lightInterval);
                this.lightInterval = null;
            }
            resolve();
        });
    }


    /**
     * SHUTDOWN PROCEDURE
     */
    isDonePlaying() {
        return new Promise((resolve) => {
            let interv = setInterval(() => {
                if (!this.isPlaying) {
                    clearInterval(interv);
                    resolve();
                }
            });
        });
    }
    isMotorHome() {
        return new Promise((resolve) => {
            let counter = 0;
            let interv = setInterval(() => {
                counter ++;
                if (this.zeroPinValue < 500) {
                    clearInterval(interv);
                    resolve();
                }else{
                    if(counter > 10) this.goHome()// don't wait more then 2 secs - else something went wrong
                }
            },200);
        });
    }
    stopProcedure() {
        return new Promise((resolve)=>{
            this.player.pause();
            this.mutepin.low();
            clearInterval(this.moveInterval);
            this.isPlaying = false;
            this.lightOff();
            this.isMotorHome().then(()=>{
                resolve();
            });
        });
    }
    startProcedure(){
        if(DeviceSettings.get('USE_MOTION_SENSOR')){
            this.moveInterval = setInterval(()=>{
                this.movepin.query((state)=>{
                    // console.log(v);
                    if(state.value  > 400) this.sensorRead();
                });
            },100);
        }else{
            this.runLoop();
        }
    }
    sensorRead(){
        if(this.routineInProgress)  return;
        if(this.timeoutPassed){
            if(DeviceSettings.get('USE_DELAY')){
                let delay = parseInt(DeviceSettings.get('DELAY_INTERVAL'));
                setTimeout(this.runOnMove,delay);
            }else{
                this.runOnMove();
            }
            // this.runOnMove();
        }
    }

    runOnMove(){
        FileSystem.writeActivation();
        this.timeoutPassed = false;
        if(DeviceSettings.get('CONTINUOS_MOVE')){
            if(DeviceSettings.get('USE_PATTERN_MOVEMENT')){
                this.runPatternRoutine();
            }else if(DeviceSettings.get('USE_RANDOM_MOVEMENT')){
                this.runRandomRoutine();
            }else{
                this.runRoutine();
            }
        }else{
            this.runInOutRoutine();
        }
    }

    runLoop(){
        console.log('not suposed to rich here')
    }

    powerUSB(){
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
export default new Arduino();