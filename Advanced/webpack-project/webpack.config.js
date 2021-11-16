const path = require('path');
const { webpack } = require('webpack');
// const HotModuleReplacementPlugin = require('react-hot-loader');
 
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|.jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s[ac]ss$/i,  
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          'sass-loader',
        ]
      }

    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', 'scss', 'sass']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './bundle.js',
  },
//   plugins: [ new HotModuleReplacementPlugin() ],
  devServer: {
    static: path.resolve(__dirname, './dist'),
    // hot: true,
  },
};