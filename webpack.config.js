var path = require('path')
var webpack = require('webpack')
var NpmInstallPlugin = require('npm-install-webpack-plugin')
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: './static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new NpmInstallPlugin()


  ],
  module: {
    preLoaders: [
      // {
      //   test: /\.js$/,
      //   loaders: ['eslint'],
      //   include: [
      //     path.resolve(__dirname, "src"),
      //   ],
      // }
    ],
    loaders: [
      // {
      //   loaders: ['react-hot', 'babel-loader'],
      //   include: [
      //     path.resolve(__dirname, "src"),
      //   ],
      //   test: /\.js$/,
      //   plugins: ['transform-runtime'],
      // },
      {
        test: /\.exec\.js$/,
        loader: [ 'script-loader' ]
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.less$/,
        loader: 'css?sourceMap!less?sourceMap'
      }, 
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader!"
      }, 
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },

      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      }


    ]
  },
  postcss: function () {
    return [autoprefixer, precss];
  }
}

