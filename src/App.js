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
			wordToGuessEmptySpaces: [],
			theWord: []
		};
	}
  render() {
		console.log("this is the length of wordToGuess",this.state.wordToGuess.length, this.state.wordToGuess);
		let className = `strike-${this.state.strikes}`;
		let spans = [];

		let emptySpaces = () => {
			//this function puts an empty space for each letter in wordToGuess.
			for(let i = 0; i < this.state.wordToGuess.length; i++ ){
				spans.push(<span> _</span>);
			}
		}

		let theWordArray = () => {
			//this function puts each lette of the wordToGuess in an array.
			for (let i = 0; i < this.state.wordToGuess.length; i++){
				this.state.theWord.push(this.state.wordToGuess[i]);
			}
		}

    return (
			<div>
				{emptySpaces()}
				{theWordArray()}

				<div className="hangman-sprites">
					<div className={`${className} current`} />
				</div>
				<div id="inputs">
					<div>{spans}</div>
					<div>{this.state.theWord}</div>

					<input />
					<button>Guess</button>
				</div>
			</div>
    );
  }
}

export default App;
