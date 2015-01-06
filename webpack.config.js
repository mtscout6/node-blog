var path = require('path');
var fs = require('fs');

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
      {
        test: /\.md/,
        loaders: [
          path.resolve('./lib/markdown/proxy-loader.js'),
          'jsx?harmony&insertPragma=React.DOM',
          path.resolve('./lib/markdown/loader.js')
        ]
      },
      { test: /\.jsx$/, loader: 'jsx?harmony&insertPragma=React.DOM' },
      { test: /\.less/, loader: 'style!css!less' },
      { test: /\.css/, loader: 'style!css' },
      { test: require.resolve('react'), loader: 'expose?React' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.md']
  },

  plugins: [
    function() {
      this.plugin('done', function(stats) {
        var statsPath = path.join(__dirname, 'lib', 'stats.json');
        fs.writeFileSync(statsPath, JSON.stringify(stats.toJson()));
      });
    }
  ]
};
