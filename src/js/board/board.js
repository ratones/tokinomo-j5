let five = nw.require('johnny-five');
let SerialPort = nw.require('browser-serialport');
let fs = nw.require('fs');
// const play = nw.require('play');
// const load = nw.require('audio-loader');

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
            this.melodyIndex ++;
            if(this.melodyIndex>=this.files.length)
            this.melodyIndex = 0;
            // this.goHome();
        });
        this.canmove = true;
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
                    if (port.manufacturer.search('Arduino') != -1) {
                        resolve(port.comName);
                    }
                    console.log(port.comName);
                    console.log(port.pnpId);
                    console.log(port.manufacturer);
                });
                //resolve();
            });
        });
    }
    initialize() {
        let self = this;
        return new Promise((resolve, reject) => {
            this.detectArduinoPort().then((com) => {
                var board = new five.Board({
                    port: com,
                    repl: false
                });
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
                        if (value > 800 && !self.routineInProgress) {
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
            this.motorpin.low();
            this.motorIsMoving = true;
            this.stepper.step({
                steps: steps,
                direction: dir,
                rpm: speed,
                accel: accel,
                decel: decel
            }
                , () => {
                    this.motorpin.high();
                    this.motorPosition = dir === 0 ? this.motorPosition - steps : this.motorPosition + steps;
                    console.log(this.motorPosition);
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
                // self.routineInProgress = false;
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
            this.listFiles().then(() => { this.isPlaying = true; this.playFile(this.melodyIndex) });
            let self = this;
            self.routineInProgress = true;
            this.motorpin.low();
            this.stepper.rpm(800).cw().accel(0).decel(0).step(3350, () => {
                self.motorPosition = 3350;
                self.motorpin.high();
                resolve();
            });
        });
    }

    bounce() {
        let self = this;
        let dir = 0;
        self.move(dir, 1000, 600, 0, 0).then(() => {
            dir = dir === 0 ? 1 : 0;
            if (self.isPlaying) {
                self.move(dir, 1000, 600, 0, 0).then(() => {
                    if (self.isPlaying) self.bounce();
                    else self.goHome();
                });
            }else{
                self.goHome();
            }
        });



        // this.move(0,1000,800,0,0).then(()=>{
        //     self.move(1,1000,800,0,0).then(()=>{
        //         runningLoop ++;
        //         self.motorIsMoving = false;
        //     });
        // });

    }

    listFiles() {
        let self = this;
        this.files = [];
        return new Promise((resolve) => {
            fs.readdir('Files', (err, f) => {
                f.forEach(file => {
                    console.log(file);
                    self.files.push('Files/' + file);
                });
                resolve();
            });
        });
        // self.playFile(files[0]);
    }

    playFile(index) {
        this.mutepin.high()
        this.player.src = './../' + this.files[index];
        this.player.play();
    }
}
export default new Arduino();