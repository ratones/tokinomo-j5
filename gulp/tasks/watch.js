
/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch(config.markup.src, ['markup','css']);
  gulp.watch([config.less.watchsrc,config.less.src], ['css']);
  gulp.watch(config.libs.src, ['libs']);
});
