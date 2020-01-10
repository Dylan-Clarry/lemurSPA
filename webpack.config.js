const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// main configuration object
module.exports = {
	
	// path to entry point
	entry: './src/javascript/index.js',

	// bundle and output file to path
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	// mode for webpack
	// default is production
	mode: 'development',

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(sa|sc|c)ss$/,

				// set loaders to transform files
				// loaders are applied left to right
				// the first loader will be applied after others
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						// resolves url() and @imports inside CSS
						loader: "css-loader",
					},
					{
						// apply postCSS fixes like autoprefixer and minifying
						loader: "postcss-loader",
					},
					{
						// transform SASS to standard CSS
						loader: "sass-loader",
						options: {
							implementation: require("sass")
						}
					}
				]
			},
			{
				// apply rules for images
				test: /\.(png|jpe?g|gif|svg)$/,
				use: [
					{
						// use file-loader for these files
						loader: "file-loader",

						// in options we can set different things like format
						// and directory to save
						options: {
							outputPath: 'images'
						}
					}
				]
			},
			{
				// apply rules for fonts files
				test: /\.(woff|woff2|ttf|otf|eot)$/,
				use: [
					{
						// using file-loader too
						loader: "file-loader",
						options: {
							outputPath: 'fonts'
						}
					}
				]
			}
		]
	},
	
	plugins: [
		new MiniCssExtractPlugin({
			filename: "bundle.css"
		})
	]
};

