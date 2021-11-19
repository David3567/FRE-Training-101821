const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
      main: path.resolve(__dirname,'src/index.js')
    },
    output: {
      main: path.resolve(__dirname,'dist'),
      filename: 'test.bundle.js'
    },
    module: {
        rules: [
          { 
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react', '@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime'],
              },
            },
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
          ],
      },
        ],
      },
    devServer: {
        port:8001,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
  };    