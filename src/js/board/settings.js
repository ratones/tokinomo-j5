import * as _ from 'lodash';
import HttpClient from './../network/client';
import Arduino from './board';

const fs = nw.require('fs');


class DeviceSettings {
    constructor() {
        this.defaults = {
            FRAGILE_PRODUCT: false,
            SWING_MAX_RETRACT: 1000,
            RANGE_MAX_POSITION: 3350,
            CONTINUOS_MOVE: true,
            USE_MOTION_SENSOR: true,
            RANDOM_PLAY: false,
            USE_CLOCK_RESET: false,
            CLOCK_START_TIME: '2017-06-01T09:00:00.000Z',
            CLOCK_END_TIME: '2017-06-01T22:00:00.000Z',
            UTC_DIFF: 7,
            MOTION_STARTING_DIR: 1,
            KEEP_MOTOR_ON: false,
            SPEED: 50000,
            USE_PATTERN_MOVEMENT: true,
            USE_RANDOM_MOVEMENT: false,
            USE_DELAY: false,
            DELAY_INTERVAL: 0,
            USE_BLITZ: true,
            BLITZ_COUNT: 1,
            BLITZ_DELAY: 0,
            LOOP_PAUSE: 5000,
            PAUSE_BETWEEN_TRACKS: 5000,
            ALLOWED_DETECTIONS: 2,
            WAITING_TIME: 5000,
            LOOP_COUNT_CONT: 1,
            DIFFERENCE: 5000,
            WAITING_TIME_DETECT: 1000,
            ACCELERATION: 90000
        };
        this.settings = [];
        // this.USE_BATTERY_RESET = false;
        // this.BATTERY_RESET_INTERVAL = 30000;
        document.querySelector('#btnSaveLocal').addEventListener('click', this.saveLocal.bind(this));
        document.querySelector('#btnSaveServer').addEventListener('click', this.saveServer.bind(this));
    }

    loadPage() {
        document.querySelector('#layout').classList.add('hidden');
        document.querySelector('#edit-patterns').classList.add('hidden');
        document.querySelector('.edit-settings').classList.remove('hidden');
        this.bindValues();
    }
    loadPatternsPage(){
        document.querySelector('#layout').classList.add('hidden');
        document.querySelector('#edit-patterns').classList.remove('hidden');
        document.querySelector('.edit-settings').classList.add('hidden');
        this.buildView();
    }
    exit() {
        document.querySelector('#layout').classList.remove('hidden');
        document.querySelector('#edit-patterns').classList.add('hidden');
        document.querySelector('.edit-settings').classList.add('hidden');
    }

    saveSettings(settings) {
        //this.deserialize(settings);
        this.persistKey('deviceSettings', JSON.stringify(settings));
        this.settings = settings;
    }

    loadSettings() {
        let settings = this.persistKey('deviceSettings');
        if (settings) {
            this.settings = JSON.parse(settings);
        }
    }

    

    saveLocal() {
            this.settings.forEach((key) => {
                let el = document.querySelector('#' + key.name);
                if (el) {
                    if (el.type == 'checkbox') {
                        key.val = el.checked?'true':'false';
                    } else {
                        if (el.id.search('TIME') != -1 && el.id != "WAITING_TIME") {
                            let dt = new Date();
                            dt.setHours(el.value.split(':')[0]);
                            dt.setMinutes(el.value.split(':')[1]);
                            dt.setSeconds(el.value.split(':')[2]);
                            //el.value = dt;
                            // dt.setHours(dt.getHours() + this.UTC_DIFF);
                            key.val = dt;
                        } else {
                            key.val = el.value;
                        }
                    }
                }
            });
        this.persistKey('deviceSettings', JSON.stringify(this.settings));
    }

    saveServer() {
        let json = {};
        let client = new HttpClient();
        
        this.settings.forEach((key) => {
                let el = document.querySelector('#' + key.name);
                if (el) {
                    if (el.type == 'checkbox') {
                        key.val = el.checked?'true':'false';
                    } else {
                        if (el.id.search('TIME') != -1 && el.id != "WAITING_TIME") {
                            let dt = new Date();
                            dt.setHours(el.value.split(':')[0]);
                            dt.setMinutes(el.value.split(':')[1]);
                            dt.setSeconds(el.value.split(':')[2]);
                            //el.value = dt;
                            // dt.setHours(dt.getHours() + this.UTC_DIFF);
                            key.val = dt;
                        } else {
                            key.val = el.value;
                        }
                    }
                }
            });
        client.postSettings(JSON.stringify(this.settings)).then(()=>{
            this.persistKey('deviceSettings', JSON.stringify(this.settings));
        });
    }

    bindValues() {
        this.loadSettings();
        this.settings.forEach((key)=>{
                let el = document.querySelector('#' + key.name);
                if (el) {
                    if (el.type == 'checkbox') {
                        el.checked = key.val=='true'?true:false;
                    } else {
                        if (el.id.search('TIME') != -1 && el.id != "WAITING_TIME") {
                            let dt = new Date(key.val);
                            //el.value = dt;
                            // dt.setHours(dt.getHours() + this.UTC_DIFF);
                            el.value = String('00' + dt.getHours()).slice(-2) + ':' + String('00' + dt.getMinutes()).slice(-2) + ':' + String('00' + dt.getSeconds()).slice(-2);
                        } else {
                            el.value = key.val;
                        }
                    }
                }
         });
    }

    getPatterns() {
        let patterns = this.persistKey('patterns');
        if (patterns) {
            return JSON.parse(patterns);
        }
    }

    savePatterns(data) {
        this.persistKey('patterns', JSON.stringify(data));
    }


    get(key){
        this.settings.find((s)=>{return s.name === key}).val;
    }

    persistKey(key, value) {
        if (!key) return;
        if (value) {
            localStorage.setItem(key, value);
        } else {
            let v = localStorage.getItem(key);
            if (!v) return null;
            else return v;
        }
    }

    deserialize(json) {
        for (let index = 0; index < json.length; index++) {
            const prop = json[index];
            this[prop.name] = prop.val;
        }

    }
    deserializePersistent(json) {
        this.__original__ = _.cloneDeep(json);
        Object.keys(this.__original__)
            .forEach((key) => this[key] = json[key]);
    }
    serialize() {
        try {
            return DeviceSettings.serializeObject(this);
        }
        catch (e) {
            throw new Error(`Error serializing object [${this.constructor.name}]`);
        }
    }

    serializeObject(o) {
        let _pojo = {};
        if (o instanceof Map) {
            o.forEach((obj, key) => _pojo[key] = DeviceSettings.serializeProperty(obj))
        }
        else {
            Object.keys(o)
                .filter(DeviceSettings.isPropertyForSerialization)
                .forEach((key) => _pojo[key] = DeviceSettings.serializeProperty(o[key]));
        }
        return _pojo;
    }

    serializeProperty(p) {
        if (p instanceof DeviceSettings) {
            return p.serialize();
        }
        else if (_.isObject(p)) {
            return this.serializeObject(p)
        }
        else if (_.isArray(p)) {
            return p.join(',');
        }
        else {
            return isEmpty(p) ? null : p;
        }
    }

    isPropertyForSerialization(propName) {
        return propName !== 'undefined' && propName !== "isDirtyProp" && !/^__/.test(propName)
    }

    /**
     * PATTERNS
     */
    buildView(){
        let patterns = this.getPatterns().sort((a,b)=>{
            if (a.filename < b.filename) {
                return -1;
              }
              if (a.filename > b.filename) {
                return 1;
              }
              return 0;
        });
        let page = document.querySelector('#edit-patterns');
        page.innerHTML = '';
        patterns.forEach(p=>{
            //build file container
            let fieldset = document.createElement('fieldset');
            let legend = document.createElement('legend');
            legend.innerText = p.filename;
            fieldset.appendChild(legend);
            //add button
            let addBtn = document.createElement('button');
            addBtn.innerText = 'Add row';
            addBtn.id = p.fileid;
            addBtn.addEventListener('click',this.addRow.bind(this));
            fieldset.appendChild(addBtn);
            let saveBtn = document.createElement('button');
            saveBtn.innerText = 'Save Local';
            saveBtn.id = 'save'+p.fileid;
            saveBtn.addEventListener('click',this.savePatternLocal.bind(this));
            fieldset.appendChild(saveBtn);
            let saveBtnServer = document.createElement('button');
            saveBtnServer.innerText = 'Save Server';
            saveBtnServer.id = 'save'+p.fileid;
            saveBtnServer.addEventListener('click',this.savePatternServer.bind(this));
            fieldset.appendChild(saveBtnServer);

            let testBtn = document.createElement('button');
            testBtn.innerText = 'Test pattern';
            testBtn.id = 'test'+p.fileid;
            testBtn.addEventListener('click',this.runPatternTest.bind(this));
            fieldset.appendChild(testBtn);
            //patterns container
            let paternsTable = document.createElement('div');
            paternsTable.classList.add('file-patterns');
            paternsTable.id = 'file'+p.fileid;
            p.pattern.forEach(x=>{
                let row = document.createElement('div');
                row.classList.add('patern-row');
                let pauseCol = document.createElement('div');
                pauseCol.classList.add('patern-column');
                let pauseEditor = document.createElement('input');
                pauseEditor.value = x.pause;
                pauseEditor.classList.add('pause-value');
                pauseCol.appendChild(pauseEditor);
                let distanceCol = document.createElement('div');
                distanceCol.classList.add('patern-column');
                let distanceEditor = document.createElement('input');
                distanceEditor.value = x.distance;
                distanceEditor.classList.add('direction-value');
                distanceCol.appendChild(distanceEditor);
                let idCol = document.createElement('div');
                idCol.classList.add('patern-column');
                let idEditor = document.createElement('input');
                idEditor.type='hidden';
                idEditor.value = x.id;
                idEditor.classList.add('id-value');
                idCol.appendChild(idEditor);
                let delBtn = document.createElement('button');
                delBtn.innerHTML = 'Delete';
                delBtn.id=x.id;
                delBtn.addEventListener('click',this.delRow);
                delBtn.classList.add('patern-column');
                row.appendChild(pauseCol);
                row.appendChild(distanceCol);
                row.appendChild(idCol);
                row.appendChild(delBtn);
                paternsTable.appendChild(row);
            });
            fieldset.appendChild(paternsTable);
            page.appendChild(fieldset);
        });

    }
    addRow(e){
        let fileid = e.target.id;
        let paternsTable = document.querySelector('#file'+fileid);
        let row = document.createElement('div');
        row.classList.add('patern-row');
        let pauseCol = document.createElement('div');
        pauseCol.classList.add('patern-column');
        let pauseEditor = document.createElement('input');
        pauseEditor.value = 0;
        pauseEditor.classList.add('pause-value');
        pauseCol.appendChild(pauseEditor);
        let distanceCol = document.createElement('div');
        distanceCol.classList.add('patern-column');
        let distanceEditor = document.createElement('input');
        distanceEditor.value = 0;
        distanceEditor.classList.add('direction-value');
        distanceCol.appendChild(distanceEditor);
        let idCol = document.createElement('div');
        idCol.classList.add('patern-column');
        let idEditor = document.createElement('input');
        idEditor.type='hidden';
        idEditor.value = 0;
        idEditor.classList.add('id-value');
        idCol.appendChild(idEditor);
        let delBtn = document.createElement('button');
        delBtn.innerHTML = 'Delete';
        //delBtn.id=0;
        delBtn.addEventListener('click',this.delRow);
        delBtn.classList.add('patern-column');
        row.appendChild(pauseCol);
        row.appendChild(distanceCol);
        row.appendChild(idCol);
        row.appendChild(delBtn);
        paternsTable.appendChild(row);
    }
    delRow(e){
        let row = e.target.parentNode;
        row.parentNode.removeChild(row);
    }
    savePatternServer(e){
       let fileid = e.target.id.replace('save','');
       let container = document.querySelector('#file'+fileid);
       let newPatterns = [];
       container.querySelectorAll('.patern-row').forEach((row)=>{
            let pause = row.querySelector('.pause-value').value;
            let direction = row.querySelector('.direction-value').value;
            let id = row.querySelector('.id-value').value;
            newPatterns.push({pause:pause,distance:direction,file_id:fileid});
       });
       console.log(newPatterns);
       let client = new HttpClient();
       client.postPattern(fileid,JSON.stringify(newPatterns)).then(()=>{
        let patterns = this.getPatterns();
        let fp = patterns.find(p=>{return p.fileid == fileid});
        fp.pattern = newPatterns;
        this.savePatterns(patterns);
       });
    }
    savePatternLocal(e){
        let fileid = e.target.id.replace('save','');
        let container = document.querySelector('#file'+fileid);
        let newPatterns = [];
        container.querySelectorAll('.patern-row').forEach((row)=>{
             let pause = row.querySelector('.pause-value').value;
             let direction = row.querySelector('.direction-value').value;
             let id = row.querySelector('.id-value').value;
             newPatterns.push({pause:pause,distance:direction,file_id:fileid});
        });
        console.log(newPatterns);
        
         let patterns = this.getPatterns();
         let fp = patterns.find(p=>{return p.fileid == fileid});
         fp.pattern = newPatterns;
         this.savePatterns(patterns);
        
     }

     runPatternTest(e){
        let fileid = e.target.id.replace('test','');
        let container = document.querySelector('#file'+fileid);
        let newPatterns = [];
        container.querySelectorAll('.patern-row').forEach((row)=>{
             let pause = row.querySelector('.pause-value').value;
             let direction = row.querySelector('.direction-value').value;
             let id = row.querySelector('.id-value').value;
             newPatterns.push({pause:pause,distance:direction,file_id:fileid});
        });
        console.log(newPatterns);
        
         let patterns = this.getPatterns();
         let fp = patterns.find(p=>{return p.fileid == fileid});
         fp.pattern = newPatterns;
         this.savePatterns(patterns);
         let fileIndex = 0;
         fs.readdir('C:/Device/Files', (err, f) => {
            f.forEach((file,index) => {
                if(fp.filename ==file){
                    fileIndex = index;
                }
            });
            Arduino.melodyIndex = fileIndex;
            console.log(fileIndex);
            //Arduino.runPatternRoutine();
        });
         
     }

     getFileIndex(melody){
        let file = this.audioSel.value.replace('C:/Device/Files/','');
        let fileIndex = this.files.indexOf(file);
        return fileIndex;
    }
}
export default new DeviceSettings();