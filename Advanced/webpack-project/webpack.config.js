const path = require('path');
const { webpack } = require('webpack');
// const HotModuleReplacementPlugin = require('react-hot-loader');
 
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|.jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
//   plugins: [ new HotModuleReplacementPlugin() ],
  devServer: {
    static: path.resolve(__dirname, './dist'),
    // hot: true,
  },
};