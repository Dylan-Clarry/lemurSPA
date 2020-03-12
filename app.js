//import "regenerator-runtime/runtime";

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

			let spaLinks = getSpaLinks();
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

let handleRedirect = _ => {
	window.addEventListener('hashchange', _ => {

		let pathName = location.hash.replace('#/', '');

		console.log("hash has been changed!");
		console.log("hash replace     :", pathName);
		console.log("location href    :", window.location.href);
		console.log("location origin  :", window.location.origin);

		window.history.pushState(
			{},
			pathName,
			window.location.origin + '/' + pathName
		);
	});
}

let getSpaLinks = _ => {
	let spaLinks = document.querySelectorAll(".spalink");
	return spaLinks
}

module.exports = { LemurApp };

// a = document.getElementById("new_link");
// a.addEventListener("click",function(){
//      alert("preform action");
//      window.event.preventDefault();
// },false);