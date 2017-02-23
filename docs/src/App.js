import React, { Component } from 'react';
import logo from '../../svgs/planning-center/color-planning-center-mark.svg';
import './App.css';
const camelCase = require("lodash.camelcase")
const upperFirst = require("lodash.upperfirst")

const iconSets = [
  {name: "accounts",        components: true,  icons: require("./accounts-icons").default},
  {name: "apps",            components: true,  icons: require("./apps-icons").default},
  {name: "check-ins",       components: true,  icons: require("./check-ins-icons").default},
  {name: "color-apps",      components: false, icons: require("./color-apps-icons").default},
  {name: "giving",          components: true,  icons: require("./giving-icons").default},
  {name: "groups",          components: true,  icons: require("./groups-icons").default},
  {name: "interfaces",      components: true,  icons: require("./interfaces-icons").default},
  {name: "people",          components: true,  icons: require("./people-icons").default},
  {name: "planning-center", components: false, icons: require("./planning-center-icons").default},
  {name: "registrations",   components: true,  icons: require("./registrations-icons").default},
  {name: "services",        components: true,  icons: require("./services-icons").default},
]

const getComponentName = name => `${upperFirst(camelCase(name))}Icon`

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

        {iconSets.map(({icons, components, name}, i) =>
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
                  {components && <th>component</th>}
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
                        href={`https://github.com/planningcenter/icons/tree/master/svgs/${name}/${icon}.svg`}
                        target="_blank"
                      >{name}/{icon}</a>
                    </td>
                    {components &&
                      <td>
                        <a
                          href={`https://github.com/planningcenter/icons/tree/master/components/${name}/${getComponentName(icon)}.js`}
                          target="_blank"
                        >
                          {getComponentName(icon)}
                        </a>
                      </td>
                    }
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
