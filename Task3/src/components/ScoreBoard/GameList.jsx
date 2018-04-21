import React from 'react';

class GameList extends React.Component {
    
    render() {
        
        return (
            <div>
                <h2 className="game-header">Latest Games</h2>
                <div className="game-list">
                    {this.props.children}               
                </div>
            </div>
        )
    }
}

export default GameList;