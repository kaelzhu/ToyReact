const path = require('path')

module.exports = {
	entry: {
		main: './main.js',
	},
	devServer: {
		port: 9000,
		contentBase: path.join(__dirname, 'public'),
		filename: '[name].bundle.js',
		hot: true,
		index: 'index.html',
		publicPath: '/dist/',
	},
	output: {
		filename: '[name].bundle.js',
	},
	devtool: 'inline-source-map',
	mode: 'development',
	optimization: {
		minimize: false,
	},
}
