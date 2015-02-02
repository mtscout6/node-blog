require('6to5/register');
var _ = require('lodash');
var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var RequestShortener = require('webpack/lib/RequestShortener');
var publicPath = '/assets/';
var AssetMapPlugin = require('asset-map-webpack-plugin');
var ChunksMapPlugin = require('./webpack/chunks-map-plugin');

module.exports = {
  name: 'testnameforstats',
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
          '6to5',
          path.resolve('./lib/markdown/loader.js')
        ],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loaders: [
          '6to5',
          path.resolve('./webpack/client-loader.js')
        ],
        exclude: /node_modules/
      },
      { test: /\.less/, loader: 'style!css!autoprefixer!less' },
      { test: /\.css/, loader: 'style!css' },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'image?bypassOnDebug&optimizationLevel=7&interlaced=true&progressive=true' },
      { test: require.resolve('react'), loader: 'expose?React' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.md']
  },

  plugins: [
    new webpack.IgnorePlugin(/chunks\.json/),
    new webpack.IgnorePlugin(/image-assets\.json/),
    new webpack.optimize.CommonsChunkPlugin('commons.js'),
    new AssetMapPlugin(publicPath, path.join(__dirname, 'lib/images/image-assets.json')),
    new ChunksMapPlugin(publicPath)
  ]
};
