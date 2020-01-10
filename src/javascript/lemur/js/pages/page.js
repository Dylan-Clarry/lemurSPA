// page class object
class Page {
	
	// set page content
	setContent(content) {
		this.content = content;
	}

	// get page content
	getContent(content) {
		return this.content;
	}

	// render the page content to the DOM
	render() {
		appState.contentDiv.innerHTML = this.content;
	}
}