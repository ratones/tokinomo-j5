let five = nw.require('johnny-five');

class Arduino{
    board;
    constructor(){}
    initialize(){
        return new Promise((resolve,reject)=>{
            this.board = new five.Board();
            this.board.on("ready", function() {
                resolve();
            });
        });
    }
    move(steps){

    }
    goHome(){

    }
}
export default new Arduino();