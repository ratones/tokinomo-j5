// let five = nw.require('johnny-five');
let SerialPort = nw.require('browser-serialport').SerialPort;
let fs = nw.require('fs');
// const play = nw.require('play');
// const load = nw.require('audio-loader');

import Util from './../util';

class Arduino {
    board;
    buffer='';
    constructor() {
        let player = document.querySelector('#myAudio');
        player.volume = 0.5;
        player.addEventListener('ended', () => {
            console.log('player ended');
            //this.mutepin.low();
        });
        this.player = player;
    }
    initialize() {
        let self = this;
        return new Promise((resolve, reject) => {
            // serialport.list(function(err, result) {
            //     Util.log(result);
            // });
            this.port = new SerialPort('COM5', {
                baudRate: 9600
            }, () => { 
                self.port.on('data',  function  (data)  {
                    self.parseLines(data);
                    // self.port.flush(false);
                });
                self.readInterval = setInterval(()=>{
                    self.port.write('8,A8;', function(err, res) {
                        if (err) { console.log(err); }
                        
                    });
                },500);
                
                resolve() ;
            });
            
        });
    }
    ab2str(buf) {
        return String.fromCharCode.apply(null, new Uint16Array(buf));
    }

    readSensor(pin){
        this.port.write('7,'+pin+';', function(err, res) {
            if (err) { console.log(err); }
        });
    }

    readVoltage() {
        return new Promise((resolve) => {
            let volts = '0';
            let amps = '0';
            // var pinv = new five.Pin("A1");
            // var pina = new five.Pin("A9");
            // pinv.query(function(state) {
            //     volts = state.value;
            //     pina.query(function(state) {
            //         amps = state.value;
            //         resove({volts,amps});
            //     });
            // });  
            resolve({ volts, amps });
        });

    }
    move(steps) {

    }
    goHome() {
       clearInterval(this.readInterval);
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
        //this.mutepin.high()
        this.player.src = './../' + this.files[index];
        this.player.play();
    }

    parseLines(data){
        this.freeRead = false;
        this.buffer+=this.ab2str(data).replace(/(\r\n|\n|\r)/gm,"");
        let arrBuffer = this.buffer.split(';');
        let cmd = arrBuffer.shift();
        this.buffer = this.buffer.substr(this.buffer.indexOf(';')+1);
        console.log('Data:', cmd);
        this.freeRead = true;
    }
}
export default new Arduino();