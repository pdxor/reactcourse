const players = [
{
	name: "Kahlil",
	score: 555,
	id: 1
},
{
	name: "Jim",
	score: 111,
	id: 2
},
{
	name: "jo",
	score: 222,
	id: 3
}
];

//react component use capitol as to differentiate from html markup
const Header = (props) =>  {
	console.log(props);
	return (
		<header>
			<h1>{ props.title }</h1>
			<span className="stats"> {props.totalPlayers(5)}</span>
		</header>
	);
}

const Player = (props) => {
	console.log(props);
	return (
		<div className="player">
			<span className="player-name">
				{ props.name }
			</span>
		{/* Counter here*/}
			<Counter score={ props.score } />
		</div>
		);
}

const Counter = (props) =>  {
	return (
			<div className="counter">
				<button className="counter-action decrement"> - </button>
				<span className="counter-score">{props.score}</span>
				<button className="counter-action increment"> + </button>
			</div>
	);
}

const App = (props) => {
	return(
		<div className="scoreboard">
			<Header 
				title="My Scoreboard" 
				totalPlayers={ n => n + 2 }
			/>

			{/* Player's list */}
			{props.initialPlayers.map( player =>
				<Player 
					score = {player.score} 
					name = {player.name} 
					key = {player.id.toString()}
				/>
			)}
					
		</div>
		);
}
// class Timer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { seconds: 0 };
//   }

//   tick() {
//     this.setState(state => ({
//       seconds: state.seconds + 1
//     }));
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     return (
//       <div>
//         Seconds: {this.state.seconds}
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Timer />,
//   document.getElementById('timer-example')
// );
ReactDOM.render(
	<App initialPlayers={players} />,
	document.getElementById('root')

);