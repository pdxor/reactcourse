

//react component use capitol as to differentiate from html markup
const Header = () => (
		<header>
			<h1>Scoreboard</h1>
			<span className="stats">Players: 1</span>
		</header>
);




ReactDOM.render(
	<Header />,
	document.getElementById('root')

);