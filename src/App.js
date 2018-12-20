import React, { Component } from 'react';
import logo from './logo.svg';
import CounterContainer from './CounterContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterContainer />
      </div>
    );
  }
}

export default App;
