(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var NewStationIcon = function NewStationIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-new-station" },
  React.createElement(
    "title",
    { id: "title" },
    "new-station icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M5.174 6.647L3.7 8.116l3.449 3.444 5.61-5.61-1.51-1.51-4.14 4.142zM13.005.018H2.995A2.9 2.9 0 0 0 .018 2.907v10.1a2.977 2.977 0 0 0 2.977 2.977h6.414a4.609 4.609 0 0 1-1.16-1.9H2.907a.992.992 0 0 1-.992-.992V2.907a.992.992 0 0 1 .992-.992h10.186a.992.992 0 0 1 .992.992V8.3a4.606 4.606 0 0 1 1.9 1.195V2.907a2.9 2.9 0 0 0-2.98-2.889z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M12.632 9.342a3.329 3.329 0 1 0 3.329 3.329 3.329 3.329 0 0 0-3.329-3.329zm2.007 3.829h-1.507v1.507h-1v-1.507h-1.507v-1h1.507v-1.507h1v1.507h1.507z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = NewStationIcon
  } else {
    global.NewStationIcon = NewStationIcon
  }
})(this)
