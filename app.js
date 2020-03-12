//import "regenerator-runtime/runtime";

// router object
class LemurApp {
	constructor() {
		this.routes = {};
		this.state = {};
		this.content = '<h1>Test Header</h1>';

		window.addEventListener('hashchange', _ => {

			let pathName = location.hash.replace('#/', '');

			console.log("hash has been changed!");
			console.log("hash replace   :", pathName);
			console.log("location href  :", window.location.href);
			console.log("location origin:", window.location.origin);

			window.history.pushState(
				{},
				pathName,
				window.location.origin + pathName
			);
		});
	}

	run() {

		// find the app div to add page content to
		const app = null || document.getElementById('app');
		if(app) {
			app.innerHTML = this.content;
		} else {
			console.error("Lemur Error: root element div with id 'app' not found");
		}
	}

	runPostPageLoad() {
		window.addEventListener('load', this.run());
	}
}

module.exports = {
	LemurApp,
}