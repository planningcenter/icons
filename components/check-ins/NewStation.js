(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var NewStation = function NewStation() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-new-station", role: "img", className: "symbol symbol-new-station" },
  React.createElement(
    "title",
    { id: "title-new-station" },
    "new-station icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M5.174 6.647L3.705 8.116l3.444 3.444 5.61-5.61-1.51-1.51-4.14 4.142zM13.005.018H3A2.9 2.9 0 0 0 .018 2.907v10.1A2.976 2.976 0 0 0 3 15.982h6.409a4.61 4.61 0 0 1-1.16-1.9H2.907a.993.993 0 0 1-.993-.992V2.907a.994.994 0 0 1 .993-.993h10.186a.993.993 0 0 1 .993.993V8.3a4.6 4.6 0 0 1 1.9 1.2V2.907A2.9 2.9 0 0 0 13.005.018z", role: "presentation" }),
    React.createElement("path", { d: "M12.632 9.342a3.329 3.329 0 1 0 3.329 3.329 3.33 3.33 0 0 0-3.329-3.329zm2.007 3.829h-1.507v1.507h-1v-1.507h-1.507v-1h1.508v-1.507h1v1.508h1.507z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = NewStation;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.NewStation = NewStation;
  }
})(this)
