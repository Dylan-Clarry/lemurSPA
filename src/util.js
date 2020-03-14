
// // gets all a tags with class 'spalink'
// let getSpaLinks = _ => {
// 	return document.querySelectorAll(".spalink");
// },

// // handles the redirect of a 'spalink' for a single page app
// let handleRedirect = _ => {
// 	window.addEventListener('hashchange', _ => {

// 		let pathName = location.hash.replace('#/', '');

// 		console.log("hash has been changed!");
// 		console.log("hash replace     :", pathName);
// 		console.log("location href    :", window.location.href);
// 		console.log("location origin  :", window.location.origin);

// 		window.history.pushState(
// 			{},
// 			pathName,
// 			window.location.origin + '/' + pathName
// 		);
// 	});
// }
