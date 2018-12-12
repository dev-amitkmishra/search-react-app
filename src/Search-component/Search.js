import React, { Component} from 'react';
import Suggestions from './Suggestions';
import './Search.css'
import axios from 'axios';

class Search extends Component {
    counter = 1;
    state = {
        query: '',
        isSearched: false,
        results: []
    }

    suggestions = [
        {'id': 1, 'name': 'Amit'}
    ];

    getInfo = (id) => {
        axios.get('https://jsonplaceholder.typicode.com/comments/' + id)
          .then(({ data }) => {
            this.setState({
              results: [data]
            })
          })
      }
    
    handleInputChange = (e) => {
        this.setState({
            query: e.target.value,
            isSearched: true
        }, () => {
            this.getInfo(this.state.query);
        })
    }

    render() {
        return (
            <form>
                <input
                    className="Search"
                    type="number"
                    placeholder="Search for..."
                    onChange={this.handleInputChange}
                    key="customSearchInput"/>
                <Suggestions results={this.state.results} isSearched={this.state.isSearched} />
                </form>
        )
    }
}

export default Search;