import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import state from "./state";

const randomWords = require('random-words');

class App extends Component {

	constructor(){
		super();
		this.state = {
			wordToGuess: randomWords,
			strikes:0,
			guess:"",
			correctGuesses:[],
			wordToGuessEmptySpaces: []
		};
	}
  render() {
		console.log(this.state.wordToGuess.length);
		let className = `strike-${this.state.strikes}`;
		let spans = [<span>_</span>];
		let emptySpaces = () => {
			for(let i = 0; i < 5; i++ ){
				console.log([i]);
			}

		}

    return (
			<div>
				{console.log("this is my random word", this.state.wordToGuess())}
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
