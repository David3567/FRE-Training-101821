config = {
	entry: './src/main.js',
	mode: 'development',
	output: {
		path: '/target',
		filename: 'index.js',
	},

	devServer: {
		port: 8090,
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	},
}

module.exports = config
