export default class DeviceStatus{
    constructor(){
        this.integrity = false;
        this.sound = false;
        this.movement = false;
        this.activations = 0;
        this.battery = 0;
    }
}