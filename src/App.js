import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import state from "./state";

const randomWords = require('random-words');

class App extends Component {

	constructor(){
		super();
		this.state = {
			wordToGuess: randomWords(),
			strikes:0,
			guess:"",
			correctGuesses:[],
			wordToGuessEmptySpaces: []
		};
	}
  render() {
		console.log("this is the length of wordToGuess",this.state.wordToGuess.length, this.state.wordToGuess);
		let className = `strike-${this.state.strikes}`;
		let spans = [];
		let emptySpaces = () => {
			for(let i = 0; i < this.state.wordToGuess.length; i++ ){
				spans.push(<span> _</span>);
				console.log("this emptySpaces loop", [i]);
			}

		}

    return (
			<div>
				{emptySpaces()}

				<div className="hangman-sprites">
					<div className={`${className} current`} />
				</div>
				<div id="inputs">
					<div>{spans}</div>
					<input />
					<button>Guess</button>
				</div>
			</div>
    );
  }
}

export default App;
