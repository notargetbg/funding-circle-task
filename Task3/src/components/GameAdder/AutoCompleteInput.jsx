import React from 'react';

class AutoCompleteInput extends React.Component {
    constructor() {
        super();
        this.suggestItems = this.suggestItems.bind(this);
        this.state = {
            suggestions: [],
            selectedWord: ''
        }
    }

    suggestItems(e) {
        const { words } = this.props;
        const inputText = e.target.value.toLowerCase();

        if (inputText.length < 1) {
            this.setState({
                suggestions: [],
                selectedWord: ''
            });

            return;
        }

        const suggestions = words.filter(word => word.slice(0, inputText.length).toLowerCase() === inputText);
        this.setState({
            selectedWord: e.target.value,
            suggestions
        });
    }

    chooseSuggestion(word) {        
        this.setState({
            selectedWord: word,
            suggestions: []
        });

        this.props.onSelectedWord(word);
    }    

    clearState() {        
        this.setState({
            selectedWord: '',
            suggestions: []
        });
        this.props.onSelectedWord('');
    }

    render() {
        return (
            <div className="autocomplete">
                <input className="autocomplete-input" value={this.state.selectedWord} onChange={this.suggestItems} type="text" />
                <ul className="autocomplete-suggestions">
                    {this.state.suggestions.map((word, index) => (
                        <li onClick={() => this.chooseSuggestion(word)} key={index} value={word} className="autocomplete-suggestion">{word}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default AutoCompleteInput;