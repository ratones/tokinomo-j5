import * as $ from 'jquery';
import console from './../util';
let path = nw.require('path');
let os = nw.require('os');
var exec = nw.require('child_process').exec;
var spawn = nw.require('child_process').spawn;
var fs = nw.require('fs');
var http = nw.require('http');
var AdmZip = nw.require('adm-zip');

export default class HttpClient {
    constructor() {
        this.checkUrl = 'http://www.tokinomo.com';
        this.baseUrl = 'http://www.monitor.tokinomo.com';
    }

    checkConnection() {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: this.checkUrl,
                type: 'GET',
                success: () => {
                    resolve();
                },
                error: () => {
                    reject();
                }
            });
        });
    }

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
        });
    }

    postSettings(data){
        return new Promise((resolve, reject) => {
            $.ajax({
                url: this.baseUrl + '/api/index.php/utils/updatesettings',
                data: data,
                type: 'POST',
                contentType: 'application/json', // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
                processData: false, // NEEDED, DON'T OMIT THIS
                // ... Other options like success and etc
                success: (response) => {
                    resolve(response);
                },
                error: (err) => {
                    reject(err);
                }
            });
        });
    }

    postPattern(fileid,data){
        return new Promise((resolve, reject) => {
            $.ajax({
                url: this.baseUrl + '/api/index.php/files/pattern/'+fileid,
                data: data,
                type: 'POST',
                contentType: 'application/json', // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
                processData: false, // NEEDED, DON'T OMIT THIS
                // ... Other options like success and etc
                success: (response) => {
                    resolve(response);
                },
                error: (err) => {
                    reject(err);
                }
            });
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
                        self.deleteDirectory('C:/Device/Files').then(()=>{
                            let zp = new AdmZip(filepath);
                            zp.extractAllTo('C:/Device/Files',true);
                            resolve();
                        });
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
    }

    deleteFile(dir, file) {
        return new Promise(function (resolve, reject) {
            var filePath = path.join(dir, file);
            fs.lstat(filePath, function (err, stats) {
                if (err) {
                    return reject(err);
                }
                if (stats.isDirectory()) {
                    resolve(deleteDirectory(filePath));
                } else {
                    fs.unlink(filePath, function (err) {
                        if (err) {
                            return reject(err);
                        }
                        resolve();
                    });
                }
            });
        });
    }
    
    deleteDirectory(dir) {
        let self = this;
        return new Promise(function (resolve, reject) {
            fs.access(dir, function (err) {
                if (err) {
                    return reject(err);
                }
                fs.readdir(dir, function (err, files) {
                    if (err) {
                        return reject(err);
                    }
                    Promise.all(files.map(function (file) {
                        return self.deleteFile(dir, file);
                    })).then(function () {
                        fs.rmdir(dir, function (err) {
                            if (err) {
                                return reject(err);
                            }
                            resolve();
                        });
                    }).catch(reject);
                });
            });
        });
    }
}