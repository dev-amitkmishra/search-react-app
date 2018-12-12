import React, { Component} from 'react';
import Suggestions from './Suggestions';
import './Search.css'


class Search extends Component {
    counter = 1;
    state = {
        query: '',
        results: []
    }

    suggestions = [
        {'id': 1, 'name': 'Amit'}
    ];

    handleInputChange = (e) => {
        this.setState({
            query: e.target.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                this.counter = this.counter + 1;
                this.suggestions.push({
                    id: this.counter,
                    name: 'Amit' + this.counter
                })
                this.setState({
                    results: this.suggestions
                })
            }
        })
    }

    render() {
        return (
            <form>
                <input
                    className="Search"
                    type="text"
                    placeholder="Search for..."
                    onChange={this.handleInputChange}
                    key="customSearchInput"/>
                <Suggestions results={this.state.results} />
                </form>
        )
    }
}

export default Search;