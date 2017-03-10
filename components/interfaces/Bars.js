(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Bars = function Bars() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-bars" },
  React.createElement(
    "title",
    { id: "title" },
    "bars icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M0 3.251h16V5.16H0zM0 7.07h16v1.909H0zm0 3.819h16v1.909H0z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Bars;
  } else {
    global.InterfacesIcon = global.InterfacesIcon || {};
    global.InterfacesIcon.Bars = Bars;
  }
})(this)
