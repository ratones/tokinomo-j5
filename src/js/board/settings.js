import * as _ from 'lodash';

class DeviceSettings {
    constructor() {
            this.USE_BLITZ = true;
            this.BLITZ_DELAY = 0;
            this.LOOP_PAUSE = 5000;
            this.PAUSE_BETWEEN_TRACKS = 5000;
            this.FRAGILE_PRODUCT = false;
            this.LOOP_COUNT_CONT = 1;
            this.DIFFERENCE = 5000;
            this.MOTION_STARTING_DIR = 1;
            this.WAITING_TIME_DETECT = 1000;
            this.USE_PATTERN_MOVEMENT = true;
            this.WAITING_TIME = 5000;
            this.ALLOWED_DETECTIONS = 2;
            this.SWING_MAX_RETRACT = 1000;
            this.KEEP_MOTOR_ON = false;
            this.RANGE_MAX_POSITION = 3350;
            this.CONTINUOS_MOVE = true;
            this.SPEED = 50000;
            this.ACCELERATION = 90000;
            this.USE_MOTION_SENSOR = true;
            this.BLITZ_COUNT = 1;
            this.RANDOM_PLAY = false;
            this.USE_RANDOM_MOVEMENT = false;
            this.USE_BATTERY_RESET = false;
            this.BATTERY_RESET_INTERVAL = 30000;
            this.USE_DELAY = false;
            this.DELAY_INTERVAL = 0;
            this.USE_CLOCK_RESET = false;
            this.CLOCK_START_TIME = '2017-06-01T07:00:00.000Z';
            this.CLOCK_END_TIME = '2017-06-01T09:00:00.000Z';
            this.UTC_DIFF = 7;
    }

    saveSettings(settings) {
        this.deserialize(settings);
        this.persistKey('deviceSettings',JSON.stringify(this));
    }
    loadSettings() {
        let settings = this.persistKey('deviceSettings');
        if (settings){
            this.deserializePersistent(JSON.parse(settings));
        }
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
    deserializePersistent(json){
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
}
export default new DeviceSettings();