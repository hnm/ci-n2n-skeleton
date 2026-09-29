'use strict'

const path = require('path');
// const autoprefixer = require('autoprefixer')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ImageminPlugin = require('imagemin-webpack-plugin').default;
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
// const imageminMozjpeg = require('imagemin-mozjpeg');
module.exports = {
	mode: 'development',
	entry: './js/functions.js',
	devtool: "source-map",
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '..', 'src-php', 'public', 'assets', 'bstmpl', 'js')
	},
	plugins: [
		/*new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.$': 'jquery',
			'window.jQuery': 'jquery'
		}),*/
		// new CopyWebpackPlugin(   {
		// 	patterns: [
		// 		// {
		// 		// images.map(imgPath => ({
		// 		// 	from: imgPath,
		// 		// 	to: path.resolve(__dirname, '..', 'src-php', 'public', path.basename(imgPath))
		// 		// }))
		// 		// }
		// 		// {
		// 		// 	from: path.resolve('assets/**/img/**/**'),
		// 		// 	to: path.resolve(__dirname, '..', 'src-php', 'public')
		// 		// },
		// 		{
		// 			from: 'assets/**/img/**/**',
		// 			to: path.resolve(__dirname, '..', 'src-php', 'public')
		// 		}
		// 		]
		//   }
		// ),
		// new ImageminPlugin({
		// 	pngquant: ({quality: [80]}),
		// 	plugins: [imageminMozjpeg({quality: 80})]
		// })
	],
	// optimization: {
	// 	minimizer: [
	// 		new ImageMinimizerPlugin({
	// 			minimizer: {
	// 				// Implementation
	// 				implementation: ImageMinimizerPlugin.imageminMinify,
	// 				// Options
	// 				options: {
	// 					encodeOptions: {
	// 						jpeg: {
	// 							quality: 10,
	// 						},
	// 						png: {
	// 							quality: .1
	// 						},
	// 					},
	// 				},
	// 			},
	// 		}),
	// 	]
	// }


/*
	devServer: {
		static: path.resolve(__dirname, 'dist'),
		port: 8080,
		hot: true
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './index.html' })
	],
	module: {
		rules: [
			{
				test: /\.(scss)$/,
				use: [
					{
						// Adds CSS to the DOM by injecting a `<style>` tag
						loader: 'style-loader'
					},
					{
						// Interprets `@import` and `url()` like `import/require()` and will resolve them
						loader: 'css-loader'
					},
					{
						// Loader for webpack to process CSS with PostCSS
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									autoprefixer
								]
							}
						}
					},
					{
						// Loads a SASS/SCSS file and compiles it to CSS
						loader: 'sass-loader'
					}
				]
			}
		]
	}*/
}