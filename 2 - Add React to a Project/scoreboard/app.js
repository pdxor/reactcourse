

//react component use capitol as to differentiate from html markup
const Header = () =>  {
	return (
		<header>
			<h1>Scoreboard</h1>
			<span className="stats"> <Timer /></span>
		</header>
	);
}

const Player = () => {
	return (
		<div className="player">
			<span className="player-name">
				Kahlil
			</span>
		{/* Counter here*/}
			<Counter />
		</div>
		);
}
const Counter = () =>  {
	return (
			<div className="counter">
				<button className="counter-action decrement"> - </button>
				<span className="counter-score">35</span>
				<button className="counter-action increment"> + </button>
			</div>
	);
}

const App = () => {
	return(
		<div className="scoreboard">
			<Header title="Scoreboard" totalPlayers={1}/>

			{/* Player's list */}
			<Player />
		</div>
		);
}
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

// ReactDOM.render(
//   <Timer />,
//   document.getElementById('timer-example')
// );
ReactDOM.render(
	<App />,
	document.getElementById('root')

);