const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webPackConfig = require('./webpack.config.dev');

const compiler = webpack(webPackConfig);
const webServerConfig = {
  publicPath: webPackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
};

const server = new WebpackDevServer(compiler, webServerConfig);

server.listen(3000);
console.log([
  '888             888   888   888            \'',
  '888             888   888   888           ;',
  '888             888   888   888            ;',
  '888  888 .d88b. 888888888888888 .d88b.    `,  .--.',
  '888 .88Pd8P  Y8b888   888   888d8P  Y8b     ._.-./',
  '888888K 88888888888   888   88888888888     \\/"""\\ ',
  '888 "88bY8b.    Y88b. Y88b. 888Y8b.         (_____)',
  '888  888 "Y8888  "Y888 "Y888888 "Y8888    --=xXXXx=--'
].join('\n'));
console.info('==> 🌎 Listening on port %s', 3000);
