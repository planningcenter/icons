(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Restricted = function Restricted() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-restricted" },
  React.createElement(
    "title",
    { id: "title" },
    "restricted icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M8 .028a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 2a5.972 5.972 0 0 1 4.1 1.632l-9.39 7.193A6 6 0 0 1 8 2.028zm0 12a5.97 5.97 0 0 1-4.062-1.6l9.375-7.18A5.992 5.992 0 0 1 8 14.028z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Restricted;
  } else {
    global.RegistrationsIcon = global.RegistrationsIcon || {};
    global.RegistrationsIcon.Restricted = Restricted;
  }
})(this)
