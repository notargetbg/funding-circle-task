import React from 'react';
import classnames from 'classnames';

class GameListItem extends React.Component {
    constructor() {
		super();
		this.deleteItem = this.deleteItem.bind(this);
	}

    deleteItem(gameId) {
        this.props.handleDeleteItem(gameId);
    }

    render() {
        const { game, gameId } = this.props;

        const isPlayer1Winner = game.totalScore[0] > game.totalScore[1];
        const isPlayer2Winner = game.totalScore[0] < game.totalScore[1];
        
        return (
            <div className="game-list-item">
                <div className="game-title">
                    <div className={classnames('player player-home', {'winner':isPlayer1Winner})}>
                        <img src="img/player.png" className="player-thumb" />
                        <span className="player-name">
                            {game.players[0]}
                        </span>
                    </div>
                    <div className="game-score">
                        {`${game.totalScore[0]} - ${game.totalScore[1]}`}
                    </div>  
                    <div className={classnames('player player-away', {'winner':isPlayer2Winner})}>
                        <span className="player-name">
                            {game.players[1]}
                        </span>
                        <img src="img/player.png" className="player-thumb" />
                    </div>
                </div>
                <div className="game-sets">
                    {game.setsScore.map((setScore, index) => (
                        <span key={index} className="game-set">
                            {`${setScore[0]} - ${setScore[1]}`}
                        </span>
                    ))}
                </div>
                <img onClick={() => this.deleteItem(gameId)} src="img/trash-icon.png" className="delete-icon" alt="Trash icon" />
            </div>
        )
    }
}

export default GameListItem;