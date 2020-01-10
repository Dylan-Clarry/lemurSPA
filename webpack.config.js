const path = require('path');

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

	entry: /* ... */,
	output: /* ... */,

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
			}
		]
	}
};

