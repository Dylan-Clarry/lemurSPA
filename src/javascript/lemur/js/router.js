// assign routes
const routes = {
	'/': home,
	'/index.html': home,
	'/about': about,
};

// on active history entry change
window.onpopstate = () => {
	routes[window.location.pathname].render();
};

// on nav item click update history
const _redirect = (pathName, navIndex) => {
	console.log(pathName);
	window.history.pushState(
		{},
		pathName,
		window.location.origin + pathName
	);

	// call route and call page to render content
	routes[pathName].render();

	// reset window position to top
	_scrollToTop();
};

// go to url path on page load
_redirect(window.location.pathname, 0);