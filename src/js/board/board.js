let five = nw.require('johnny-five');

class Arduino {
    board;
    constructor() { }
    initialize() {
        return new Promise((resolve, reject) => {
            this.board = new five.Board({
                port: "COM5",
                repl:false
            });
            
            this.board.on("ready", function() {
                // this.pinMode(20, this.MODES.OUTPUT);
              
                // this.loop(500, () => {
                //   // Whatever the last value was, write the opposite
                //    //this.digitalWrite(20, this.pins[20].value ? 0 : 1);
                //   this.digitalWrite(20,0);
                // });
                this.stepper = new five.Stepper({
                    type: five.Stepper.TYPE.DRIVER,
                    stepsPerRev: 200,
                    pins: {
                      step: 4,
                      dir: 5
                    }
                  });
                
                resolve();
              });
        });
    }

    readVoltage(){
        return new Promise((resolve)=>{
            let volts = '0';
            let amps = '0';
            var pinv = new five.Pin("A1");
            var pina = new five.Pin("A9");
            pinv.query(function(state) {
                volts = state.value;
                pina.query(function(state) {
                    amps = state.value;
                    resove({volts,amps});
                });
            });  
        });
        
    }
    move(steps) {

    }
    goHome() {

    }
}
export default new Arduino();