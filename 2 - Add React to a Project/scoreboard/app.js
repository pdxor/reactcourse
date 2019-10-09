const title = React.createElement(
	'h1',
	{ id: 'main-title', title: 'this is a title' },
	'My first React Element!'
);

//<h1 id="main-title" title="This is a title">My first Reacgt Element!</h1>


ReactDOM.render(
	title,
	document.getElementById('root')

);