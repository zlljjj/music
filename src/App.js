import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header/header'
import './App.css';
import './reset.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
