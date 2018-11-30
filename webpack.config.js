const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const externals = [];
if (process.env.NODE_ENV === 'production') externals.push('aws-sdk');

 const lambdaFunctions = {
  entry: {
    toolkit: ['babel-polyfill', './src/toolkit.js'],
  },
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: '[name].js',
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, './serverless.yml'),
      to: path.resolve(__dirname, './lib')
    }, {
      from: path.resolve(__dirname, './src/models/'),
      to: path.resolve(__dirname, './lib/models/')
    }])
  ],
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals
};

module.exports = lambdaFunctions;

