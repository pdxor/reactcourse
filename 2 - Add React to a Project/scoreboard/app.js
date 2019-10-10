//jsx
const title = <h1>My First React Element!</h1>;

//<h1 id="main-title" title="This is a title">My first Reacgt Element!</h1>

const desc = <p>I just learned how to create a Reacte Element and rendered to the DOM.</p>;


const header = React.createElement(
	'header',
	null,
	title,
	desc
);

ReactDOM.render(
	header,
	document.getElementById('root')

);