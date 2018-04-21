import React from 'react';
import GameList from './GameList';
import GameListItem from './GameListItem';

class ScoreBoard extends React.Component {
	constructor() {
		super();
		this.handleDeleteItem = this.handleDeleteItem.bind(this);
	}

	handleDeleteItem(gameId) {
        this.props.onGameDeleted(gameId);
	}

	render() {
		
		const mappedGames = this.props.games.map((game, index) => {
			return { index, value: game };
		});

		return (
			<div className="game-component">                
                <GameList>
                    {mappedGames.sort((gameA, gameB) => gameB.index - gameA.index).map((game) => (
						<GameListItem key={game.index} game={game.value} gameId={game.index} handleDeleteItem={this.handleDeleteItem} />
					))}
					{this.props.games.length === 0 && 
						<h3>There are no games played</h3>
					}
                </GameList>
            </div>
		);
	}
}

export default ScoreBoard;