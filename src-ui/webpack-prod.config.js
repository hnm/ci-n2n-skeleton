'use strict'

const path = require('path');
// const autoprefixer = require('autoprefixer')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const {default: ImageminPlugin} = require('imagemin-webpack-plugin');
// const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
	mode: 'production',
	entry: './js/functions.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '..', 'build', 'prod', 'target', 'public', 'assets', 'bstmpl', 'js')
	},
	plugins: [
		// new webpack.ProvidePlugin({
		// 	$: 'jquery',
		// 	jQuery: 'jquery',
		// 	'window.$': 'jquery'
		// }),
		// new CopyWebpackPlugin({
		// 	patterns: [
		// 		{
		// 			from: path.resolve('assets', '**', 'img', '**', '**'),
		// 			to: path.resolve(__dirname, '..', 'build', 'prod', 'target', 'public')
		// 		}
		// 	]
		// }),
		// new ImageminPlugin({
		// 	pngquant: ({quality: [80]}),
		// 	plugins: [imageminMozjpeg({quality: 80})]
		// })
	]
}