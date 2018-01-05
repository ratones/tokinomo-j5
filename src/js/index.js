import SelfTest from './selftest/index';
import DeviceStatus from './selftest/status';
import HttpClient from './network/client';
import Arduino from './board/board';
import Settings from './board/settings';
import Util from './util';




let client = new HttpClient();
let selftest = new SelfTest();
let canStartRoutine = false;
let checkRoutineInterval = null;
document.querySelector('#btnResetDevice').addEventListener('click', resetDevice);

let deviceID = Settings.persistKey('deviceID');
if(!deviceID){
   let newID = prompt('Please provide the device ID:');
   Settings.persistKey('deviceID',newID);
   deviceID = newID;
}

client.checkConnection()
    .then(() => {
        let status = new DeviceStatus();
        Util.log('Connection established');
        selftest.checkIntegrity().then((result) => {
            if (result) {
                status.integrity = true;
                Util.log('Integrity passed!');
            } else {
                Util.log('Integrity failed!');
            }
            // sound check
            selftest.checkSound()
                .then((result) => {
                    if (result) {
                        Util.log('Sound passed!');
                        status.sound = true;
                    } else {
                        Util.log('Sound failed!');
                    }
                    Arduino.initialize().then(() => {
                        // read movement and voltage from arduino
                        Arduino.readVoltage().then((res) => { 
                            status.battery='Volts:'+res.volts+';Amps:'+res.amps;
                        });
                        selftest.record().then((videofile) => {
                            //add data to a form and submit
                            let formData = new FormData();
                            formData.append('sound', status.sound);
                            formData.append('product', status.integrity);
                            //TODO get data from device!!!
                            formData.append('mechanism', 1);
                            formData.append('battery', status.battery);
                            formData.append('activations', '258');
                            formData.append('id', deviceID);
                            let fileOfBlob = new File([videofile.video], 'Device'+deviceID+'.mp4');
                            formData.append('files', fileOfBlob);
                            client.postFormData(formData)
                                .then((response)=>{
                                    Util.log('Data received from server');
                                    //set time and date if received
                                    if(response.servertime){
                                        // let dt = eval(response.servertime.replace('/',''));
                                        // Util.log(dt);
                                    }
                                    //wait for files 
                                    loadFiles();
                                    Settings.saveSettings(response.settings);
                                    if(canStartRoutine){
                                        clearInterval(checkRoutineInterval);
                                        startDevice();
                                    }else{
                                        checkRoutineInterval = setInterval(()=>{
                                            if(canStartRoutine){
                                                clearInterval(checkRoutineInterval);
                                                startDevice()
                                            }
                                        },1000);
                                    }
                                    
                                })
                                .catch((err)=>{
                                    Util.error(err);
                                });
                        });
                    });

                });
        });

    })
    .catch(() => {
        Util.log('No internet connection');
    });

function resetDevice() {
    //selftest.resetDevice();
    // Arduino.initialize().then(()=>{
    //     Arduino.readVoltage().then((res)=>{Util.log(res)});
    //     Arduino.goHome();
    // });
    Arduino.playFile(0);
}

function startDevice(){
    Util.info('Device started on' + new Date());
    Arduino.listFiles().then(()=>{
        Arduino.playFile(0);
    });
}

function loadFiles(){
    client.downloadMelodies(deviceID).then(()=>{
        canStartRoutine = true;
    });
}