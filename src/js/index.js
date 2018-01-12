import SelfTest from './selftest/index';
import DeviceStatus from './selftest/status';
import HttpClient from './network/client';
import Arduino from './board/board';
import Settings from './board/settings';
// import console from './util';
import Menu from './menu';


let menu = new Menu();
let client = new HttpClient();
let selftest = new SelfTest();
let canStartRoutine = false;
let checkRoutineInterval = null;
let serverDateTimeSet = false;

let deviceID = Settings.persistKey('deviceID');
if (!deviceID) {
    let newID = prompt('Please provide the device ID:');
    Settings.persistKey('deviceID', newID);
    deviceID = newID;
}



// client.checkConnection()
//     .catch(() => {
//         let status = new DeviceStatus();
//         console.log('Connection established');
//         selftest.checkIntegrity().then((result) => {
//             if (result) {
//                 status.integrity = true;
//                 console.log('Integrity passed!');
//             } else {
//                 console.log('Integrity failed!');
//             }
//             // sound check
//             selftest.checkSound()
//                 .then((result) => {
//                     if (result) {
//                         console.log('Sound passed!');
//                         status.sound = true;
//                     } else {
//                         console.log('Sound failed!');
//                     }
//                     Arduino.initialize().then(() => {
//                         // read movement and voltage from arduino
//                         Arduino.readVoltage().then((res) => { 
//                             status.battery='Volts:'+res.volts+';Amps:'+res.amps;
//                         });
//                         selftest.record().then((videofile) => {
//                             //add data to a form and submit
//                             let formData = new FormData();
//                             formData.append('sound', status.sound);
//                             formData.append('product', status.integrity);
//                             //TODO get data from device!!!
//                             formData.append('mechanism', 1);
//                             formData.append('battery', status.battery);
//                             formData.append('activations', '258');
//                             formData.append('id', deviceID);
//                             let fileOfBlob = new File([videofile.video], 'Device'+deviceID+'.mp4');
//                             formData.append('files', fileOfBlob);
//                             client.postFormData(formData)
//                                 .then((response)=>{
//                                     console.log('Data received from server');
//                                     //set time and date if received
//                                     if(response.servertime){
//                                         // let dt = eval(response.servertime.replace('/',''));
//                                         // console.log(dt);
//                                     }
//                                     //wait for files 
//                                     loadFiles();
//                                     Settings.saveSettings(response.settings);
//                                     Settings.savePatterns(response.patterns);
//                                     if(canStartRoutine){
//                                         clearInterval(checkRoutineInterval);
//                                         startDevice();
//                                     }else{
//                                         checkRoutineInterval = setInterval(()=>{
//                                             if(canStartRoutine){
//                                                 clearInterval(checkRoutineInterval);
//                                                 startDevice()
//                                             }
//                                         },1000);
//                                     }

//                                 })
//                                 .catch((err)=>{
//                                     console.error(err);
//                                 });
//                         });
//                     });

//                 });
//         });

//     })
//     .then(() => {
//         console.log('No internet connection');
//         Arduino.initialize().then(() => {
//             alert("Arduino ready!");
//         });
//     });

client.checkConnection()
    .then(() => {
        let status = new DeviceStatus();
        console.log('Connection established');
        selftest.checkIntegrity().then((result) => {
            if (result) {
                status.integrity = true;
                console.log('Integrity passed!');
            } else {
                console.log('Integrity failed!');
            }
            // sound check
            selftest.checkSound()
                .then((result) => {
                    if (result) {
                        console.log('Sound passed!');
                        status.sound = true;
                    } else {
                        console.log('Sound failed!');
                    }
                    // read movement and voltage from arduino
                    // Arduino.initialize().then(() => {
                    //     Arduino.readVoltage().then((res) => {
                    //         status.battery = 'Volts:' + res.volts + ';Amps:' + res.amps;
                    //     });
                    // });

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
                        let fileOfBlob = new File([videofile.video], 'Device' + deviceID + '.mp4');
                        formData.append('files', fileOfBlob);
                        client.postFormData(formData)
                            .then((response) => {
                                console.log('Data received from server');
                                //destroy video control
                                selftest.destroyVideo();
                                //set time and date if received
                                if (response.servertime) {
                                    let utc = parseInt(response.servertime.replace('/','').replace('Date','').replace('(','').replace(')',''));
                                    let dt = new Date(utc);
                                    //selftest.setSystemDate(dt);
                                    //serverDateTimeSet = true;
                                }
                                if (response.activations_request) {
                                    saveActivations();
                                }
                                //wait for files 
                                loadFiles();
                                Settings.saveSettings(response.settings);
                                Settings.savePatterns(response.patterns);

                                if (canStartRoutine) {
                                    clearInterval(checkRoutineInterval);
                                    startDevice();
                                } else {
                                    checkRoutineInterval = setInterval(() => {
                                        if (canStartRoutine) {
                                            clearInterval(checkRoutineInterval);
                                            startDevice();
                                            startNetworkPolling();
                                        }
                                    }, 1000);
                                }

                            })
                            .catch((err) => {
                                startNetworkPolling();
                                console.error(err);
                            });
                    });

                });
        });

    })
    .catch(() => {
        // set system date from RTC
        Arduino.readRTC.apply(Arduino,arguments).then((date)=>{
            let dt = new Date(date);
            selftest.setSystemDate(dt);
            startDevice();
        }); 
        let tryes = 0;
        console.log('No internet connection');
        //try to connect with GPRS 10 times
        let checkinterval = null;
        Arduino.powerUSB().then(() => {
            console.log('Start GPRS connection');
            setTimeout(() => {
                client.checkConnection().catch(() => {
                    // try every 10 seconds
                    checkinterval = setInterval(() => {
                        tryes++;
                        if (tryes > 10) {
                            clearInterval(checkinterval);
                            console.log('GPRS connection established');
                        }
                        client.checkConnection().then(res => {
                            if (res) {
                                clearInterval(checkinterval);
                                console.log('GPRS connection established');
                                startNetworkPolling();
                            }
                        });
                    }, 10000);

                }).then(() => {
                    startNetworkPolling();
                });
            }, 30000);
        });
    });

function startNetworkPolling() {
    setInterval(()=>{

        client.getStatus().then((result) => {
            if(!serverDateTimeSet){
                let utc = parseInt(result.servertime.replace('/','').replace('Date','').replace('(','').replace(')',''));
                let dt = new Date(utc);
                selftest.setSystemDate(dt);
                serverDateTimeSet = true;
            }
            /**
             * if requested status we stop routine
             * get status and activations then start routine again
             */
            if (result.request_status || result.request_activations || result.request_reset) {
                //Arduino.stopProcedure().then(() => {
                    if (result.request_status) {
                        // perform selfcheck then flag to restart arduino
                    }
                    if (result.request_reset) {
                        selftest.resetDevice();
                    }
                    if (result.request_activations) {
                        client.postActivations().then(() => {
                            //ready to start arduino
                        });
                    }
                    // });
                }
            })
        },30000);
}

function startDevice() {
    console.info('Device started on' + new Date());
    Arduino.listFiles().then(() => {
        Arduino.homespeed = Settings.get('FRAGILE_PRODUCT')?120:400;
        if(selftest.shouldStandBy()){
            alert('Device is in standby');
        }else{
            alert('Device should start routine');
        }
        let debug = true;
        if (!debug) {
            //Arduino.startRoutine();
        }
    });
}

function loadFiles() {
    client.downloadMelodies(deviceID).then(() => {
        canStartRoutine = true;
    });
}

function saveActivations() {
    client.postActivations();
}