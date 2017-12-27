import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bbtype from './Bbtype';
import SpecialButton from './SpecialButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit
          I feel tired and hungry.
        </p>
        <Bbtype/>
        <SpecialButton label="Don't Touch"></SpecialButton><br/>
        <SpecialButton label="Come to Touch"></SpecialButton>
      </div>
    );
  }
}

export default App;
