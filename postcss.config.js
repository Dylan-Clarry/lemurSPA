// setup for transformations while developing
if(process.env.NODE_ENV === 'production') {
	module.exports = {
		plugins: [
			require('autoprofixer'),
			require('cssnano'),
			// add more postCSS modules here is needed
		]
	}
}