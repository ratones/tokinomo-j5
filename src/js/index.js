import SelfTest from './selftest/index';
import DeviceStatus from './selftest/status';
import HttpClient from './network/client';
import Arduino from './board/board';
import Settings from './board/settings';


let client = new HttpClient();
let selftest = new SelfTest();
document.querySelector('#btnResetDevice').addEventListener('click', resetDevice);
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
                    if(result){
                        console.log('Sound passed!');
                        status.sound = true;
                    }else{
                        console.log('Sound failed!');
                    }
                    selftest.record().then((videofile)=>{
                        //read movement and voltage from arduino board
                        // Arduino.initialize().then(()=>{
                        //     Arduino.move(300);
                        //     Arduino.goHome();
                        // });
                        //add data to a form and submit
                        let formData = new FormData();
                        formData.append('sound',status.sound);
                        formData.append('product',status.integrity);
                        //TODO get data from device!!!
                        formData.append('mechanism',1);
                        formData.append('battery','22');
                        formData.append('activations','258');
                        formData.append('id','13');
                        var fileOfBlob = new File([videofile.video], 'Device13.mp4');
                        formData.append('files',fileOfBlob);
                        client.post(formData);
                    });

                });
        });

    })
    .catch(() => {
        console.log('No internet connection');
    });

function resetDevice() {
    selftest.resetDevice();
}