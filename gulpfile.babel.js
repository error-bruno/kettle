import gulp from 'gulp';
import gutil from 'gulp-util';
import eslint from 'gulp-eslint';
import mocha from 'gulp-mocha';
import babel from 'babel-core/register';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config';
import _helper from './test/_helper';

gulp.task('default', ['webpack-dev-server']);
gulp.task('test', ['lint', 'mocha']);

gulp.task('mocha', () =>
  gulp.src(['./src/**/*.spec.js', './src/**/*.spec.jsx'])
  .pipe(mocha({
    compilers: {
      js: babel
    },
    globals: {
      _helper
    }
  }))
);

gulp.task('lint', () =>
  gulp.src(['./src/**/*.js', './src/**/*.jsx', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

gulp.task('webpack-dev-server', () => {
  // Start a webpack-dev-server
  const compiler = webpack(webpackConfig);

  new WebpackDevServer(compiler, webpackConfig.devServer).listen(8080, 'localhost', (err) => {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
    // Server listening
    gutil.log('-=[webpack-dev-server]=-', 'http://localhost:8080');
    gutil.log([
      '   \'',
      '  ;',
      '   ;',
      ' `,  .--.',
      '   ._.-./ ',
      '   \\/"""\\ ',
      '   (_____)',
      ' --=xXXXx=--'
    ].join('\n'));
  });
});
