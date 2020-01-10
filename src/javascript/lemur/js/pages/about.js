
// create about page
const about = new Page();

about.setContent(`
	<h1>About Page</h1>
	<li><a href="#" onclick="_redirect('/', 1); return false;">Home</a></li>
`);
