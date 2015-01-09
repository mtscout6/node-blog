var _ = require('lodash');
var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var RequestShortener = require('webpack/lib/RequestShortener');
var publicPath = '/assets/';

module.exports = {
  entry: "./lib/client",

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.join('public', publicPath),
    publicPath: publicPath
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
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.IgnorePlugin(/chunks\.json/),
    new webpack.optimize.CommonsChunkPlugin('commons.js'),
    function() {
      this.plugin('done', function(stats) {
        var requestShortener = new RequestShortener(process.cwd());
        var compilation = stats.compilation;

        var posts = _(compilation.modules)
          .map(function(m) {
            return {
              name: m.readableIdentifier(requestShortener),
              asset: m.chunks.map(function(c) {return c.files[0];})[0]
            }
          })
          .filter(function(m) {
            return m.name.indexOf('posts') >= 0 &&
              m.asset.indexOf('chunk') >= 0;
          })
          .map(function(m) {
            var name = m.name;
            name = name.split('!');
            name = name[name.length-1];
            return [name, publicPath + m.asset]
          })
          .object()
          .value();

        var assetMapPath = path.join(__dirname, 'lib/chunks.json');
        fs.writeFileSync(assetMapPath, JSON.stringify(posts), 'utf-8');
      });
    }
  ]
};
