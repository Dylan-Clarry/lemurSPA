
// create home page
const home = new Page();

// set page content
home.setContent(`
	<h1>Lemur SPA</h1>
	<li><a href="#" onclick="_redirect('/about', 1); return false;">About</a></li>
`);