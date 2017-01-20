var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: false,
  historyApiFallback: true,
  quiet: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening at http://localhost:3000/');
  }
});
