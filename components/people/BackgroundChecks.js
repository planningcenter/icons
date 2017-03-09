(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var BackgroundChecks = function BackgroundChecks() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-background-checks" },
  React.createElement(
    "title",
    { id: "title" },
    "background-checks icon"
  ),
  React.createElement("path", { d: "M15.287 2.508L8.518.291a1.537 1.537 0 0 0-.957 0L.793 2.508a.533.533 0 0 0-.367.507v4.728a5.4 5.4 0 0 0 2.128 4.3l4.555 3.47a1.537 1.537 0 0 0 1.863 0l4.555-3.47a5.4 5.4 0 0 0 2.128-4.3V3.015a.533.533 0 0 0-.368-.507zm-3.707 4.63l-3.216 2.934a1.011 1.011 0 0 1-1.325.032L5.4 8.752a1.011 1.011 0 1 1 1.291-1.558l.959.793 2.568-2.342a1.011 1.011 0 0 1 1.362 1.493z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = BackgroundChecks;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.BackgroundChecks = BackgroundChecks;
  }
})(this)
