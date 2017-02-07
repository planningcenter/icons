import React, { Component } from 'react';
import logo from '../../planning-center/color-planning-center-mark.svg';
import './App.css';

import accountsIcons from "./accounts-icons"
import appIcons from "./app-icons"

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

        <h3>Accounts Icons</h3>
        <table style={{margin: "0 auto"}}>
        <style>{`th, td { padding: 1rem }`}</style>
          <thead>
            <tr>
              <th>svg</th>
              <th>name</th>
              <th>collection</th>
              <th>path</th>
            </tr>
          </thead>

          <tbody>
            {Object.keys(accountsIcons).map((icon, i) =>
              <tr key={i}>
                <td>
                  <img
                    alt={`${accountsIcons[icon]} icon`}
                    src={accountsIcons[icon]}
                    height={32}
                    width={32}
                  />
                </td>
                <td>{icon}</td>
                <td>accounts</td>
                <td>account/{icon}</td>
              </tr>
            )}
          </tbody>
        </table>

        <h3>App Icons</h3>
        <table style={{margin: "0 auto"}}>
        <style>{`th, td { padding: 1rem }`}</style>
          <thead>
            <tr>
              <th>svg</th>
              <th>name</th>
              <th>collection</th>
              <th>path</th>
            </tr>
          </thead>

          <tbody>
            {Object.keys(appIcons).map((icon, i) =>
              <tr key={i}>
                <td>
                  <img
                    alt={`${appIcons[icon]} icon`}
                    src={appIcons[icon]}
                    height={32}
                    width={32}
                  />
                </td>
                <td>{icon}</td>
                <td>accounts</td>
                <td>account/{icon}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
