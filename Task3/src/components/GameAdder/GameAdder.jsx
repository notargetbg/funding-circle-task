import React from 'react';
import * as GeneratorHelper from '../../helpers/ScoreGenerator';
import AutoCompleteInput from './AutoCompleteInput';

class GameAdder extends React.Component {
    constructor(props) {
		super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePlayer1Change = this.handlePlayer1Change.bind(this);
        this.handlePlayer2Change = this.handlePlayer2Change.bind(this);
        this.state = {
            player1: '',
            player2: ''
        };
    }

    handlePlayer1Change(name) {
        this.setState({player1: name});
    }

    handlePlayer2Change(name) {
        this.setState({player2: name});
    }
	
    handleSubmit(e) {
        e.preventDefault();

        const { player1, player2 } = this.state;
        if (!player1 || !player2) {
            return;
        }

        const generatedSets = this.generateSets();

		this.props.onGameAdded({
            players: [player1, player2],
            totalScore: GeneratorHelper.calculateTotalScore(generatedSets),
            setsScore: generatedSets
        });
    }

    generateSets() {
        const setsPlayed = GeneratorHelper.getRandomIntInclusive(2, 5);

        return Array.from(new Array(setsPlayed), (sets, index) => {
            const setWinner = Math.floor((Math.random() * 2) + 1 );
            const setLoserScore = Math.floor((Math.random() * 9) + 1 );

            if (setWinner === 1) {
                return [11, setLoserScore];
            }
            if (setWinner === 2) {
                return [setLoserScore, 11];
            }
        });
    }
    
	render() {	
        const { players } = this.props;

		return (
			<div className="game-component game-adder">
            <h2 className="game-header">Add games</h2>

            <form data-add-game onSubmit={this.handleSubmit}>
                <div className="players-selection">
                    <AutoCompleteInput onPlayerAdded={this.handlePlayer1Change} words={players} />
                    <span className="selection-separator">
                        vs
                    </span>
                    <AutoCompleteInput onPlayerAdded={this.handlePlayer2Change} words={players} />                    
                </div>
                <button className="game-adder-btn" type="submit">Add Game</button>
            </form>
        </div>
		);
	}
}

export default GameAdder;