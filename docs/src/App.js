import React, { Component } from 'react';
import logo from '../../planning-center/color-planning-center-mark.svg';
import './App.css';

const iconSets = [
  {name: "accounts",        icons: require("./accounts-icons").default},
  {name: "app",             icons: require("./app-icons").default},
  {name: "check-ins",       icons: require("./check-ins-icons").default},
  {name: "giving",          icons: require("./giving-icons").default},
  {name: "groups",          icons: require("./groups-icons").default},
  {name: "interfaces",      icons: require("./interfaces-icons").default},
  {name: "people",          icons: require("./people-icons").default},
  {name: "planning-center", icons: require("./planning-center-icons").default},
  {name: "registrations",   icons: require("./registrations-icons").default},
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
          <section
            key={i}
            id={name}
          >
            <h3 style={{
              color: "white",
              backgroundColor: "#222",
              paddingTop: "1em",
              paddingBottom: "1em",
              marginTop: "1px",
              marginBottom: "2em"
            }}>
              {name.charAt(0).toUpperCase() + name.slice(1)} Icons
            </h3>
            <table style={{margin: "0 auto"}}>
            <style>{`th, td { padding: 1rem }`}</style>
              <thead>
                <tr>
                  <th>svg</th>
                  <th>name</th>
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
                        className="App-icon"
                      />
                    </td>
                    <td>{icon}</td>
                    <td>
                      <a
                        href={`https://github.com/planningcenter/icons/tree/master/${name}/${icon}.svg`}
                        target="_blank"
                      >./{name}/{icon}</a>
                    </td>
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
