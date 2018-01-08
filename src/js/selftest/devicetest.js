import * as $ from 'jquery';
const fs = nw.require('fs');

export default class DeviceTest {
    constructor() {
        this.stepsCtl = document.querySelector('#steps');
        this.dirCtl = document.querySelector('#direction');
        this.speedCtl = document.querySelector('#speed');
        this.ledStatusCtl = document.querySelector('#ledstatus');
        this.addListeners();
        this.loadAudioFiles();
    }
    addListeners() {
        document.querySelector('#btnResetDevice').addEventListener('click', this.resetDevice.bind(this));
        document.querySelector('#btnMove').addEventListener('click', this.moveCustomMotor.bind(this));
        document.querySelector('#btnExtend').addEventListener('click', this.extendMotor.bind(this));
        document.querySelector('#btnGoHome').addEventListener('click', this.goHomeMotor.bind(this));
        document.querySelector('#btnBounceEven').addEventListener('click', this.bounceEvenMotor.bind(this));
        document.querySelector('#btnBounceRandom').addEventListener('click', this.bounceRandomMotor.bind(this));

        document.querySelector('#checkstatus').addEventListener('change', this.ledCheck.bind(this));
    }

    loadAudioFiles(){
        let audioSel = document.querySelector('#audioSelect');
        audioSel.addEventListener('change',()=>{
            document.querySelector('#myAudio').src = audioSel.value;
        });
        audioSel.innerHTML = '';
        fs.readdir('Files', (err, f) => {
            f.forEach(file => {
                let opt = document.createElement('option');
                opt.value = 'C:/Device/Files/'+file;
                opt.innerHTML = file;
                audioSel.appendChild(opt);
            });
        });
    }

    enterTestMode() {
        this.stopRoutine();
        this.enableControls();
    }
    stopRoutine() {

    }
    startRoutine() {
        this.disableControls();
    }

    enableControls() {
        // document.querySelector('.device-audio').removeEventListener('click',this.disableAudio);
        document.querySelectorAll('.device-test').forEach((cont) => {
            cont.classList.remove('disabled');
            cont.childNodes.forEach((el) => {
                if (el.tagName == 'INPUT' || el.tagName == 'BUTTON' || el.tagName == 'SELECT') {
                    el.removeAttribute('disabled');
                }
            });
        });
        // $('.device')('input,button').attr('disabled',null);
    }

    disableControls() {
        document.querySelector('#myAudio').src=null;
        document.querySelectorAll('.device-test').forEach((cont) => {
            cont.classList.add('disabled');
            cont.childNodes.forEach((el) => {
                if (el.tagName == 'INPUT' || el.tagName == 'BUTTON' || el.tagName == 'SELECT') {
                    el.setAttribute('disabled','disabled');
                }
            });
        });
    }

    disableAudio(e){
        e.stopPropagation();
    }

    resetDevice() { }

    moveCustomMotor() {

    }
    extendMotor() { }
    goHomeMotor() { }
    bounceEvenMotor() { }
    bounceRandomMotor() { }

    ledCheck(e) {
        let chk = e.target;
        console.log(chk.checked);
        let rclass = chk.checked ? 'red' : 'green';
        let aclass = chk.checked ? 'green' : 'red';
        this.ledStatusCtl.classList.remove(rclass);
        this.ledStatusCtl.classList.add(aclass);
    }


}