import React, { Component } from 'react';
import logo from '../../planning-center/color-planning-center-mark.svg';
import './App.css';

const iconSets = [
  {name: "accounts", icons: require("./accounts-icons").default},
  {name: "app",      icons: require("./app-icons").default},
]

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

        {iconSets.map(({icons, name}, i) =>
          <section>
            <h3>{name.charAt(0).toUpperCase() + name.slice(1)} Icons</h3>
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
                {Object.keys(icons).map((icon, i) =>
                  <tr key={i}>
                    <td>
                      <img
                        alt={`${icons[icon]} icon`}
                        src={icons[icon]}
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
          </section>
        )}
      </div>
    );
  }
}

export default App;
