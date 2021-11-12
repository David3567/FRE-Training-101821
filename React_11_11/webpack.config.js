const path = require('path');

module.exports = {
    context: __dirname,
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader'
            },
        }]
    },
    devtool: 'source-map',
    mode: 'development',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};
