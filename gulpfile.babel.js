import gulp from 'gulp';
import gutil from 'gulp-util';
import eslint from 'gulp-eslint';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config';

gulp.task('default', ['webpack-dev-server']);

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
  });
});
