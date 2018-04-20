import React from 'react';

class ScoreBoard extends React.Component {

	render() {	

		return (
			<div class="game-component">
            <h2 class="game-header">Latest Games</h2>
            <div class="game-list">
                <div class="game-list-item">
                    <div class="game-title">
                        <div class="player player-home winner">
                            <img src="img/player.png" class="player-thumb" />
                            <span class="player-name">
                                Sarah Vanderou
                            </span>
                        </div>
                        <div class="game-score">
                            4 - 2
                        </div>  
                        <div class="player player-away">
                            <span class="player-name">
                                Jason Nort
                            </span>
                            <img src="img/player.png" class="player-thumb" />
                        </div>
                    </div>
                    <div class="game-sets">
                        <span class="game-set">11 - 7</span>
                        <span class="game-set">11 - 9</span>
                        <span class="game-set">11 - 3</span>
                        <span class="game-set">9 - 11</span>
                        <span class="game-set">7 - 11</span>
                        <span class="game-set">11 - 8</span>
                    </div>
                    <img data-delete-game src="img/trash-icon.png" class="delete-icon" alt="Trash icon" />
                </div>

                <div class="game-list-item">
                    <div class="game-title">
                        <div class="player player-home">
                            <img src="img/player.png" class="player-thumb" />
                            <span class="player-name">
                                Oronzo Gallo
                            </span>
                        </div>
                        <div class="game-score">
                            0 - 3
                        </div>  
                        <div class="player player-away winner">
                            <span class="player-name">
                                Leo Matic
                            </span>
                            <img src="img/player.png" class="player-thumb" />
                        </div>
                    </div>
                    <div class="game-sets">
                        <span class="game-set">3 - 11</span>
                        <span class="game-set">7 - 11</span>
                        <span class="game-set">0 - 6</span>
                    </div>
                    <img data-delete-game src="img/trash-icon.png" class="delete-icon" alt="Trash icon" />
                </div>

                <div class="game-list-item">
                    <div class="game-title">
                        <div class="player player-home">
                            <img src="img/player.png" class="player-thumb" />
                            <span class="player-name">
                                Nicole C. Lewis
                            </span>
                        </div>
                        <div class="game-score">
                            1 - 2
                        </div>  
                        <div class="player player-away winner">
                            <span class="player-name">
                                Feng Yang
                            </span>
                            <img src="img/player.png" class="player-thumb" />
                        </div>
                    </div>
                    <div class="game-sets">
                        <span class="game-set">6 - 11</span>
                        <span class="game-set">14 - 12</span>
                        <span class="game-set">4 - 11</span>
                    </div>
                    <img data-delete-game src="img/trash-icon.png" class="delete-icon" alt="Trash icon" />
                </div>
               
            </div>
        </div>
		);
	}
}

export default ScoreBoard;