/* Module Dependencies */
const gulp = require('gulp');

/* Task Dependencies */
const bundle = require('./tasks/bundle');
const bundlemin = require('./tasks/bundlemin');
const bundledeps = require('./tasks/bundledeps');
const sass = require('./tasks/sass');

/**
 * Task Definitions
 */


gulp.task('bundle-vendor', (done) =>
  bundledeps('vendor', 'lib/public/js/vendor', done)
);
gulp.task('bundle', () =>
  bundlemin('src/main', 'main', 'lib/public/js')
);
gulp.task('bundle-dev', () =>
  bundle('src/main', 'main.min', 'lib/public/js')
);
gulp.task('sass', () =>
  sass('src/style/main.scss', 'main', 'lib/public/style')
);

gulp.task('build', ['bundle-vendor', 'bundle', 'sass']);

gulp.task('dev', ['bundle-dev', 'sass']);
