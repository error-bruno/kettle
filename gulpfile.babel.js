import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config';

gulp.task('default', ['webpack-dev-server']);

gulp.task('webpack-dev-server', () => {
  // Start a webpack-dev-server
  const compiler = webpack(webpackConfig);

  new WebpackDevServer(compiler, webpackConfig.devServer).listen(8080, 'localhost', (err) => {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
    // Server listening
    gutil.log('-=[webpack-dev-server]=-', 'http://localhost:8080');
  });
});
