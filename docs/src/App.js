import React, { Component } from 'react';
import logo from '../../planning-center/color-planning-center-mark.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img
            src={logo}
            height="64"
            width="64"
            className="App-logo"
            alt="planning center mark"
          />
          <h2>Planning Center Icons</h2>
        </div>
      </div>
    );
  }
}

export default App;
