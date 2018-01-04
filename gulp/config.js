var dest = './build',
  src = './src'

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + '/**'
    ]
  },
  libs:{
    src:[
        'node_modules/video.js/dist/video.min.js',
        'node_modules/videojs-record/dist/videojs.record.js',
        'node_modules/recordrtc/RecordRTC.min.js',
        'node_modules/wavesurfer.js/dist/wavesurfer.min.js',
        'node_modules/wavesurfer.js/dist/plugin/wavesurfer.microphone.min.js',
        'node_modules/videojs-wavesurfer/dist/videojs.wavesurfer.min.js'
      ],
      name:'bundles.js',
      dest:dest
  },
  markup: {
    src: src + "/www/**",
    dest: dest
  },
  less:{
    src: 'src/css/main.css',
    watchsrc : 'src/css/*/**.css',
    dest:dest
  },
  css:{
    src:[
      'node_modules/video.js/dist/video-js.min.css',
      'node_modules/videojs-record/dist/css/videojs.record.css'
    ]
  },
  browserify: {
    // Enable source maps
    //debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [
      {
        entries: 'src/js/index.js',
        dest: dest,
        outputName: 'app.js'
      }
    ],
    extensions: ['.jsx'],
  }
};
