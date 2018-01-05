import * as $ from 'jquery';
<<<<<<< HEAD
export default class HttpClient{
    constructor(){
=======
let path = nw.require('path');
let os = nw.require('os');
var exec = nw.require('child_process').exec;
var spawn = nw.require('child_process').spawn;
var fs = nw.require('fs');
var http = nw.require('http');
var AdmZip = nw.require('adm-zip');

export default class HttpClient {
    constructor() {
>>>>>>> 2fbe38b6a7ac82f2bce74924b34908adc0b67566
        this.checkUrl = 'http://www.tokinomo.com';
        this.baseUrl = 'http://www.monitor.tokinomo.com';
    }

    checkConnection() {
        return new Promise((resolve, reject) => {
            $.ajax({
<<<<<<< HEAD
                url:this.checkUrl,
                type:'GET',
                success:()=>{
=======
                url: this.checkUrl,
                type: 'GET',
                success: () => {
>>>>>>> 2fbe38b6a7ac82f2bce74924b34908adc0b67566
                    resolve();
                },
                error: () => {
                    reject();
                }
            });
        });
    }

<<<<<<< HEAD
    post(data){
        $.ajax({
            url: this.baseUrl + '/api/index.php/utils/updates',
            data: data,
            type: 'POST',
            contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
            processData: false, // NEEDED, DON'T OMIT THIS
            // ... Other options like success and etc
=======
    postFormData(data) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: this.baseUrl + '/api/index.php/utils/updates',
                data: data,
                type: 'POST',
                contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
                processData: false, // NEEDED, DON'T OMIT THIS
                // ... Other options like success and etc
                success: (response) => {
                    resolve(response);
                },
                error: (err) => {
                    reject(err);
                }
            });
>>>>>>> 2fbe38b6a7ac82f2bce74924b34908adc0b67566
        });
    }

    getFiles(id) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: this.baseUrl + '/api/index.php/utils/melody/' + id,
                type: 'GET',
                success: (response) => {
                    if (response == 'noupdates') {
                        resolve();
                    } else {
                        setTimeout(() => { resolve() }, 2000);
                    }
                },
                error: () => {
                    resolve();
                }
            });
        });
    }
    downloadMelodies(id) {
        return new Promise((resolve, reject) => {

            var self = this;
            var xhr = new XMLHttpRequest();
            xhr.open('GET', this.baseUrl + '/api/index.php/utils/melody/' + id, true);
            xhr.responseType = 'blob';

            xhr.onload = function (e) {
                if (this.status == 200) {
                    if (this.response == 'noupdates') {
                        resolve();
                        return;
                    }
                    // get binary data as a response
                    var blob = this.response;
                    var fileReader = new FileReader();
                    var filepath = path.join(os.tmpdir(), 'test.zip');
                    console.log(os.tmpdir());
                    fileReader.onload = function () {
                        console.log('Writing file...');
                        fs.writeFileSync(filepath, Buffer(new Uint8Array(this.result)));
                        console.log('Unpacking melodies...');
                        let zp = new AdmZip(filepath);
                        zp.extractAllTo('Files',true);
                        resolve();
                    };
                    fileReader.readAsArrayBuffer(blob);
                }
            };
            xhr.onerror = function () {
                resolve();
            };
            xhr.send();
        });
    }

   unpackUpdate() {
        var self = this;
        var filename = path.join(os.tmpdir(), 'test.zip');
        exec('"' + path.resolve(process.cwd(), 'tools/unzip.exe') + '" -u -o "' +
            filename + '" -d "' + path.join(process.cwd(), '') + '" > NUL',
            function(err) {
                if (err) {
                   // self.statusEl = null;
                   // self.progressEl= null;
                    //self.callback.call(err);
                    return;
                } else {
                   // self.run();
                }
            });
    };
}