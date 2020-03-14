const Util = require('./src/util.js');
//import Util from './src/util.js';


// router object
class LemurApp {
	constructor() {
		this.routes = {};
		this.state = {};
		this.content = '<h1>Test Header</h1>';
	}

	run() {

		// find the app div to add page content to
		const app = null || document.getElementById('app');
		if(app) {
			app.innerHTML = this.content;

			let spaLinks = document.querySelectorAll(".spalink");
			console.log(spaLinks);
			
			for(let i = 0; i < spaLinks.length; i++) {
				let currLink = spaLinks[i]
				console.log(currLink);
				
				let href = currLink.getAttribute('href');

				currLink.addEventListener("click", function(){

					// prevent default a tag redirect
					window.event.preventDefault();
					let href = currLink.getAttribute('href')

					console.log(href);

					// rewrite url to a tags href
					window.history.pushState(
						{},
						href,
						window.location.origin + '' + href
					);
				}, false);
			}

		} else {
			console.error("Lemur Error: root element div with id 'app' not found");
		}
	}

	runPostPageLoad() {
		window.addEventListener('load', this.run());
	}
}

module.exports = { LemurApp };