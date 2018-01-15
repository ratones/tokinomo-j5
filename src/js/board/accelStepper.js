let j5 = nw.require('johnny-five');
let Stepper = j5.Stepper;
console.log(Stepper);
Stepper.prototype.home = function(){
    this.io.stepperHome.apply(this.io,[this.id,1000,200]);
};
Stepper.prototype.go = function(steps, dir, speed, accel, callback){
    this.io.stepperGo.apply(this.io,[this.id, dir, steps, speed, accel, callback]);
};

export default Stepper;
