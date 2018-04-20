import React from 'react';

class GameAdder extends React.Component {

	render() {	

		return (
			<div class="game-component game-adder">
            <h2 class="game-header">Add games</h2>

            <form data-add-game>
                <div class="players-selection">
                    <select class="player-selection">
                        <option disabled selected>Choose a player</option>
                    </select> 
                    <span class="selection-separator">
                        vs
                    </span>
                    <select class="player-selection">
                        <option disabled selected>Choose a player</option>
                    </select>
                </div>
                <button class="game-adder-btn" type="submit">Add Game</button>
            </form>
        </div>
		);
	}
}

export default GameAdder;