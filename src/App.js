import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search-component/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Search />
        </header>
      </div>
    );
  }
}

export default App;
