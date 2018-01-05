//let five = nw.require('johnny-five');
let serialport = nw.require('browser-serialport');
let fs = nw.require('fs');
const play = nw.require('play');
// const load = nw.require('audio-loader');

import Util from './../util';

class Arduino {
    board;
    constructor() {
        let player = document.querySelector('#myAudio');
        player.volume = 0.5;
        player.addEventListener('ended',()=>{console.log('player ended')});
        this.player = player;
     }
    initialize() {
        return new Promise((resolve, reject) => {
            serialport.list(function(err, result) {
                Util.log(result);
            });
            // this.board = new five.Board({
            //     port: "COM5",
            //     repl:false
            // });
            
            // this.board.on("ready", function() {
            //     // this.pinMode(20, this.MODES.OUTPUT);
              
            //     // this.loop(500, () => {
            //     //   // Whatever the last value was, write the opposite
            //     //    //this.digitalWrite(20, this.pins[20].value ? 0 : 1);
            //     //   this.digitalWrite(20,0);
            //     // });
            //     this.stepper = new five.Stepper({
            //         type: five.Stepper.TYPE.DRIVER,
            //         stepsPerRev: 200,
            //         pins: {
            //           step: 4,
            //           dir: 5
            //         }
            //       });
                
            //     resolve();
            //   });
            resolve();
        });
    }

    readVoltage(){
        return new Promise((resolve)=>{
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
            resolve({volts,amps});
        });
        
    }
    move(steps) {

    }
    goHome() {

    }
    listFiles(){
        let self = this;
        this.files = [];
        return new Promise((resolve)=>{
            fs.readdir('Files', (err, f) => {
                f.forEach(file => {
                    console.log(file);
                    self.files.push('Files/'+file);
                });
                resolve();
            });
        });
        // self.playFile(files[0]);
    }

    playFile(index){
        this.player.src = './../'+this.files[index];
        this.player.play();
    }
}
export default new Arduino();