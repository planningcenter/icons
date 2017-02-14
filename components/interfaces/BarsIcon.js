(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var BarsIcon = function BarsIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-bars" },
  React.createElement(
    "title",
    { id: "title" },
    "bars icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M0 3.251h16V5.16H0zM0 7.07h16v1.909H0zm0 3.819h16v1.909H0z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = BarsIcon
  } else {
    global.BarsIcon = BarsIcon
  }
})(this)