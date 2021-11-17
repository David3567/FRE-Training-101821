const path = require('path');
const { devServer } = require('../webpack-project/webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css', 'scss', 'sass'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './bundle.js'
    },
    devServer: {
        static: path.resolve(__dirname, './dist'),
    },
    plugins: [
        // simplifies creationg of HTML files to serve webpack bundles
        // useful for webpack bundles that include a hash in the filename which changes eveyr compilation.
        new HtmlWebpackPlugin(),
        // warns when your bundle contains multiple versions of the same package. 
        // possible that some modules mayh depend on same package but different versions.
        // helps in removing unnecessary modules.
        new DuplicatePackageCheckerPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            // highly useful for debugging compressed JS. 
            // minimizes javascript.
            new TerserPlugin(),
        ]
    }
};