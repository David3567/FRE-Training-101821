const path = require('path');
const { devServer } = require('../webpack-project/webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { default: StylelintWebpackPlugin } = require('stylelint-webpack-plugin');

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
                use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'sass-loader'],
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
        new HtmlWebpackPlugin(),
        new DuplicatePackageCheckerPlugin(),
        new MiniCssExtractPlugin(),
        new StylelintWebpackPlugin(options),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
        ]
    }
};