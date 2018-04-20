import React from 'react';
import ScoreBoard from './ScoreBoard/ScoreBoard';
import GameAdder from './GameAdder/GameAdder';
import './styles/app.scss';

class PingPongScoreApp extends React.Component {

	render() {	

		return (
			<div className='container'>
				<ScoreBoard />
				<GameAdder />
			</div>
		);
	}
}

export default PingPongScoreApp;