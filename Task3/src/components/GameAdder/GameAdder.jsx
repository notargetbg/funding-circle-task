import React from 'react';
import * as GeneratorHelper from '../../helpers/ScoreGenerator';

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

    handlePlayer1Change(e) {
        this.setState({player1: e.target.value});
    }

    handlePlayer2Change(e) {
        this.setState({player2: e.target.value});
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
                    <select className="player-selection" onChange={this.handlePlayer1Change} defaultValue="Choose a player">
                        <option disabled>Choose a player</option>
                        {players.map((player, index) => (
                            <option key={index} value={player}>{player}</option>
                        ))}
                    </select> 
                    <span className="selection-separator">
                        vs
                    </span>
                    <select className="player-selection" onChange={this.handlePlayer2Change} defaultValue="Choose a player">
                        <option disabled>Choose a player</option>
                        {players.map((player, index) => (
                            <option key={index} value={player}>{player}</option>
                        ))}
                    </select>
                </div>
                <button className="game-adder-btn" type="submit">Add Game</button>
            </form>
        </div>
		);
	}
}

export default GameAdder;