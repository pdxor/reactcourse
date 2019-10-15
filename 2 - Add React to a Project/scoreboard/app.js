

class Counter extends React.Component {

	// constructor(){
	// 	super()
	// 	this.state = {
	// 		score: 0
	// 	};
	state = {
		score: 0
	};

	incrementScore(){
	    // console.log('hi from inside increment score');
		    this.setState( prevState => ({

		    		score: prevState.score + 1

		    }));	

	};

	decrementScore(){
		    // console.log('hi from inside increment score');
		    this.setState( prevState => ({

		    		score: prevState.score - 1


	    	}));
	};



	render(){


		return (
					<div className="counter">
						<button className="counter-action decrement" onClick={() => this.decrementScore()}> - </button>
						<span className="counter-score">{this.state.score}</span>
						<button className="counter-action increment" onClick={() => this.incrementScore() /* or onClick={this.incrementScore.bind(this)} *//*dont use parentheses as it will run the code on load/init*/}> + </button>
					</div>	

		);
	}

}

//react component use capitol as to differentiate from html markup
const Header = (props) =>  {
	console.log(props);
	return (
		<header>
			<h1>{ props.title }</h1>
			<span className="stats"> {props.totalPlayers}</span>
		</header>
	);
}

const Player = (props) => {
	console.log(props.removePlayer);
	return (
		<div className="player">
			<span className="player-name">
				{ props.name }
			</span>
		{/* Counter here*/}
			<Counter />
		</div>
		);
}

// const Counter = (props) =>  {
// 	return (

// 	);
// }

class App extends React.Component {

		state = {
			players: [
				{
					name: "Kahlil",
					id: 1
				},
				{
					name: "Jim",
					id: 2
				},
				{
					name: "jo",
					id: 3
				}

			]
		}

		handleRemovePlayer = (id) => {
			this.setState(prevState => {
				return {
					players: prevState.players.filter( p => p.id !== id)
				};
			})

		}

		render(){
			return (
				<div className="scoreboard">
					<Header 
						title="My Scoreboard" 
						totalPlayers={ this.state.players.length }
					/>

					{/* Player's list */}
					{this.state.players.map( player =>
						<Player 
							name = {player.name} 
							id = {player.id}
							key = {player.id.toString()}
							removePlayer={this.handleRemovePlayer}
						/>
					)}
							
				</div>
			)
		}
		
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
	<App />,
	document.getElementById('root')

);