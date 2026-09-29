'use strict'

const path = require('path')
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const {default: ImageminPlugin} = require('imagemin-webpack-plugin');
// const imageminMozjpeg = require('imagemin-mozjpeg');
// const autoprefixer = require('autoprefixer')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: './js/functions.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '..', 'build', 'qual', 'target', 'public', 'assets', 'bstmpl', 'js')
	},
	plugins: [
		// new CopyWebpackPlugin({
		// 	patterns: [
		// 		{
		// 			from: path.resolve('assets', '**', 'img', '**', '**'),
		// 			to: path.resolve(__dirname, '..', 'build', 'qual', 'target', 'public')
		// 		}
		// 	]
		// }),
		// new ImageminPlugin({
		// 	pngquant: ({quality: [80]}),
		// 	plugins: [imageminMozjpeg({quality: 80})]
		// })
	]
}