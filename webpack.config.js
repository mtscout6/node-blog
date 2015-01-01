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
      { test: /\.jsx$/, loader: 'jsx-loader?harmony&insertPragma=React.DOM' },
      { test: require.resolve('react'), loader: 'expose?React' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
