let five = nw.require('johnny-five');
let SerialPort = nw.require('browser-serialport');
let fs = nw.require('fs');

import DeviceSettings from './../board/settings';

import Util from './../util';

class Arduino {
    board;
    constructor() {
        let player = document.querySelector('#myAudio');
        player.volume = 0.5;
        player.addEventListener('ended', () => {
            console.log('player ended');
            this.mutepin.low();
            this.isPlaying = false;
            this.melodyIndex++;
            if (this.melodyIndex >= this.files.length)
                this.melodyIndex = 0;
            if(this.canGoHome) this.goHome();
        });
        this.canGoHome = false;
        this.isMoving = true;
        this.motorPosition = 0;
        this.routineInProgress = false;
        this.player = player;
        this.melodyIndex = 0;
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
                            self.move(0, 100, 2000, 0, 100);
                        } else {
                            //self.motorPosition = 0;
                        }
                        //console.log(value);
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
                    resove({ volts, amps });
                });
            });
            resolve({ volts, amps });
        });

    }
    move(dir, steps, speed, accel, decel) {
        return new Promise((resolve) => {
            // this.motorpin.low();
            this.motorIsMoving = true;
            this.stepper.step({
                steps: steps,
                direction: dir,
                rpm: speed,
                accel: accel,
                decel: decel
            }
                , () => {
                    // this.motorpin.high();
                    this.motorPosition = dir === 0 ? this.motorPosition - steps : this.motorPosition + steps;
                    // console.log(this.motorPosition);
                    resolve();
                    this.motorIsMoving = false;
                });
        });
    }

    goHome() {
        console.log(this.motorPosition);
        let self = this;
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
                // self.zeropin.query((state)=>{
                // if(state.value>500){
                //     self.forceHome();
                // }
                // else {
                self.motorpin.high();
                self.lightOff();
                self.routineInProgress = false;
                self.canGoHome = false; // for pattern movement
                // }
                // });
            });
        }
        //console.log(value);
    }
    forceHome() {
        this.routineInProgress = false;
    }
    extendMax() {
        return new Promise((resolve) => {
            // this.listFiles().then(() => { this.isPlaying = true; this.playFile(this.melodyIndex) });
            let self = this;
            self.routineInProgress = true;
            // this.motorpin.low();
            this.stepper.rpm(800).cw().accel(0).decel(0).step(DeviceSettings.RANGE_MAX_POSITION, () => {
                self.motorPosition = DeviceSettings.RANGE_MAX_POSITION;
                // self.motorpin.high();
                resolve();
            });
        });
    }

    bounce() {
        let self = this;
        let dir = 0;
        let speed = 400;
        let steps = DeviceSettings.SWING_MAX_RETRACT;
        self.move(dir, steps, speed, 0, 0).then(() => {
            dir = dir === 0 ? 1 : 0;
            if (self.isPlaying) {
                self.move(dir, steps, speed, 0, 0).then(() => {
                    if (self.isPlaying) self.bounce();
                    else self.goHome();
                });
            } else {
                self.goHome();
            }
        });
    }
    bounceRandom() {
        let self = this;
        let dir = 0;
        let speed = 400;
        let steps = Math.round(Math.random() * 1000);
        if(steps < 200) steps +=200;
        self.move(dir, steps, speed, 0, 0).then(() => {
            // steps = Math.round(Math.random()*1000);
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
        return new Promise((resolve)=>{

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
                let steps = Math.abs(p.distance);
                let dir = p.distance >= 0 ? 1 : 0;
                setTimeout(() => {
                    if(self.isPlaying){
                        chain = chain.then(()=>{
                            self.move(dir,steps,600,0,0).then(()=>{
                                if(index == sets.length -1){
                                    resolve();
                                }
                            });
                        });
                    }else{
                        self.goHome();
                    }
                }, delay);
                //commands.push(this.move.bind(this,dir,steps,600,0,0));
            }
            // for(var func in commands){
                //     chain = chain(func);
                // }
                console.log(pattern);
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

    lightOn(){
        return new Promise(()=>{
            this.ledpin.high(()=>{
                resolve();
            });
        });
    }
    lightOff(){
        return new Promise(()=>{
            this.ledpin.low(()=>{
                resolve();
            });
        });
    }

    listFiles() {
        let self = this;
        this.files = [];
        return new Promise((resolve) => {
            fs.readdir('Files', (err, f) => {
                f.forEach(file => {
                    console.log(file);
                    self.files.push(file);
                });
                resolve();
            });
        });
        // self.playFile(files[0]);
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
            this.board.i2cRead(0x68, 0x00, 7, function (res) {
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
        this.board.i2cWrite(0x68,0x00,bytes);
    }

    /**
     * ROUTINES
     */
    runRoutine(){
        this.motorpin.low();
        this.extendMax().then(()=>{
            this.lightOn();
            this.bounce();
        });
        this.playFile(this.melodyIndex);
        this.isPlaying = true;
    }
    runRandomRoutine(){
        this.motorpin.low();
        this.extendMax().then(()=>{
            this.lightOn();
            this.bounceRandom();
        });
        this.playFile(this.melodyIndex);
        this.isPlaying = true;
    }
    runPatternRoutine(){
        this.motorpin.low();
        this.extendMax().then(()=>{
            this.lightOn();
            this.patternMove().then(()=>{
                if(this.isPlaying) this.canGoHome = true;
            });
        });
        this.playFile(this.melodyIndex);
        this.isPlaying = true;
    }
}
export default new Arduino();