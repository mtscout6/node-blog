var path = require('path');


module.exports = {
  entry: "./lib/client",

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.join('public', 'js'),
    publicPath: '/js/'
  },

  module: {
    loaders: [
      { test: /\.md/, loader: 'jsx?harmony&insertPragma=React.DOM!' + path.resolve('./lib/markdown/loader.js') },
      { test: /\.jsx$/, loader: 'jsx?harmony&insertPragma=React.DOM' },
      { test: /\.less/, loader: 'style!css!less' },
      { test: require.resolve('react'), loader: 'expose?React' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.md']
  }
};
