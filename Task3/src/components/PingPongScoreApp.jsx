import React from 'react';
import ScoreBoard from './ScoreBoard/ScoreBoard';
import GameAdder from './GameAdder/GameAdder';
import PreGeneratedData from '../helpers/PreGeneratedData.json';
import './styles/app.scss';

class PingPongScoreApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			names: ["John", "Sarah", "Amber", "Seth", "Jin", "Bren", "Cathrin", "Nick", "Elsa", "Margaret"],
			games: PreGeneratedData
		};
		this.handleGameAdded = this.handleGameAdded.bind(this);
		this.handleGameDeleted = this.handleGameDeleted.bind(this);
	}

	handleGameAdded(game) {
		this.setState({games: [...this.state.games, game]});
	}

	handleGameDeleted(id) {
		this.setState({games: this.state.games.filter((game, index) => {
			return index !== id;
		})});
	}
		
	render() {
		return (
			<div className='container'>
				<ScoreBoard games={this.state.games} onGameDeleted={this.handleGameDeleted} />
				<GameAdder onGameAdded={this.handleGameAdded} players={this.state.names} />
			</div>
		);
	}
}

export default PingPongScoreApp;