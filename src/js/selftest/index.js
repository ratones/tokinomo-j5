import CamHandler from '../webcam/camhandler';
import Util from './../util';
let fs = nw.require('fs');
let PNG = nw.require('pngjs').PNG;
let pixelmatch = nw.require('pixelmatch');

export default class SelfTest {
    constructor() {
        // {
        //     audio: true,
        //     video: true,
        //     maxLength: 10,
        //     debug: true
        // }
    }

    checkIntegrity() {
        let self = this;
        this.cam = new CamHandler({
            image: true,
            debug: true
        });
        return new Promise((resolve, reject) => {
            this.cam.snapshot().then((image) => {
                // Util.log(image);
                let base64Data = image.replace(/^data:image\/png;base64,/, "");
                fs.exists('C:/Files/reference.png', (err) => {
                    if (!err) {
                        fs.writeFile("C:/Device/reference.png", base64Data, 'base64', function (err) {
                            resolve(true);
                        });
                    } else {
                        fs.writeFile("C:/Device/compare.png", base64Data, 'base64', function (err) {
                            Util.log('Picture taken. Comparing images...');
                            let img1 = fs.createReadStream('C:/Device/reference.png').pipe(new PNG()).on('parsed', doneReading);
                            let img2 = fs.createReadStream('C:/Device/compare.png').pipe(new PNG()).on('parsed', doneReading);
                            let filesRead = 0;
                            function doneReading() {
                                if (++filesRead < 2) return;
                                var diff = new PNG({ width: img1.width, height: img1.height });

                                let px = pixelmatch(img1.data, img2.data, diff.data, img1.width, img1.height, { threshold: 0.8 });
                                if (px < 10) resolve(true);
                                else resolve(false);
                                Util.log(px);
                                img1 = null;
                                img2 = null;
                                diff.pack().pipe(fs.createWriteStream('C:/Device/diff.png'));
                            }
                        });
                    }
                });

                this.cam.stop();
            }).catch((err) => {
                resolve(false);
                this.cam.stop();
                Util.log(err);
            });
        });
        //setTimeout(()=>{this.cam.stop();},3000)
    }

    record() {
        return new Promise((resolve) => {
            this.cam.setVideo(
                {
                    audio: true,
                    video: true,
                    maxLength: 5,
                    debug: true
                });
            this.cam.record().then((videofile) => {
                resolve(videofile);
                // this.cam.reset();
            });
        });
    }

    checkSound() {
        let self = this;
        return new Promise((resolve, reject) => {
            this.processAudio().then((res)=>{
                if(res){
                   let interv = setInterval(()=>{
                       let res = self.onLevelChange();
                       if(res > 100){
                        clearInterval(interv);
                        resolve(true);
                       }
                    },500);
                   let timeout = setTimeout(()=>{
                       clearInterval(interv);
                       resolve(false);
                    },10000);
                }
                else{
                    resolve(false);
                }
            });
        });
    }

    resetDevice() {
        fs.unlink('C:/Device/reference.png');
        fs.unlink('C:/Device/compare.png');
    }

    processAudio() {
        return new Promise((resolve) => {

            window.AudioContext = window.AudioContext || window.webkitAudioContext;

            // grab an audio context
            this.audioContext = new AudioContext();

            // Attempt to get audio input
            try {
                // monkeypatch getUserMedia
                navigator.getUserMedia =
                    navigator.getUserMedia ||
                    navigator.webkitGetUserMedia ||
                    navigator.mozGetUserMedia;

                // ask for an audio input
                navigator.getUserMedia(
                    {
                        "audio": {
                            "mandatory": {
                                "googEchoCancellation": "false",
                                "googAutoGainControl": "false",
                                "googNoiseSuppression": "false",
                                "googHighpassFilter": "false"
                            },
                            "optional": []
                        },
                    }, this.onMicrophoneGranted.apply(this,[].push.call(arguments,()=>{
                        resolve(true);
                    })), this.onMicrophoneDenied.apply(this,[].push.call(arguments,()=>{resolve(false)})));
                    
            } catch (e) {
                Util.warn('getUserMedia threw exception :' + e);
                resolve(false);
            }
        });
    }

    onMicrophoneDenied(e) {
        Util.log(e);
        //alert('Stream generation failed.');
    }

    onMicrophoneGranted(stream) {
        // Create an AudioNode from the stream.
        this.mediaStreamSource = this.audioContext.createMediaStreamSource(stream);

        // Create a new volume meter and connect it.
        this.meter = this.createAudioMeter(this.audioContext);
        this.mediaStreamSource.connect(this.meter);

        // kick off the visual updating
        this.onLevelChange();
    }

    onLevelChange(time) {
        // clear the background
        //canvasContext.clearRect(0,0,WIDTH,HEIGHT);

        // check if we're currently clipping
        // if (meter.checkClipping())
        //     canvasContext.fillStyle = "red";
        // else
        //     canvasContext.fillStyle = "green";

        return Math.round(this.meter.volume * 1000);

        // draw a bar based on the current volume
        // canvasContext.fillRect(0, 0, meter.volume * WIDTH * 1.4, HEIGHT);

        // set up the next visual callback
        //  rafID = window.requestAnimationFrame( onLevelChange );
        //setInterval(this.onLevelChange.bind(this),1000);
    }

    createAudioMeter(audioContext, clipLevel, averaging, clipLag) {
        var processor = audioContext.createScriptProcessor(512);
        processor.onaudioprocess = this.volumeAudioProcess;
        processor.clipping = false;
        processor.lastClip = 0;
        processor.volume = 0;
        processor.clipLevel = clipLevel || 0.98;
        processor.averaging = averaging || 0.95;
        processor.clipLag = clipLag || 750;

        // this will have no effect, since we don't copy the input to the output,
        // but works around a current Chrome bug.
        processor.connect(audioContext.destination);

        processor.checkClipping =
            function () {
                if (!this.clipping)
                    return false;
                if ((this.lastClip + this.clipLag) < window.performance.now())
                    this.clipping = false;
                return this.clipping;
            };

        processor.shutdown =
            function () {
                this.disconnect();
                this.onaudioprocess = null;
            };

        return processor;
    }

    volumeAudioProcess(event) {
        var buf = event.inputBuffer.getChannelData(0);
        var bufLength = buf.length;
        var sum = 0;
        var x;

        // Do a root-mean-square on the samples: sum up the squares...
        for (var i = 0; i < bufLength; i++) {
            x = buf[i];
            if (Math.abs(x) >= this.clipLevel) {
                this.clipping = true;
                this.lastClip = window.performance.now();
            }
            sum += x * x;
        }

        // ... then take the square root of the sum.
        var rms = Math.sqrt(sum / bufLength);

        // Now smooth this out with the averaging factor applied
        // to the previous sample - take the max here because we
        // want "fast attack, slow release."
        this.volume = Math.max(rms, this.volume * this.averaging);
    }

    destroyVideo(){
        this.cam.destroy();
    }
}