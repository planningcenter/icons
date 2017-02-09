(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var DialIcon = function DialIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-dial" },
  React.createElement(
    "title",
    { id: "title" },
    "dial icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M11.215 9.087l-3.157-.318a1.5 1.5 0 0 0-.626.075 1.451 1.451 0 1 0 .968 2.737l2.991-1.053a.743.743 0 0 0-.173-1.44zm-.057.79L8.167 10.93a.761.761 0 1 1-.506-1.435.771.771 0 0 1 .255-.043h.074l3.155.319a.06.06 0 0 1 .048.058.054.054 0 0 1-.036.048zM8 .345a7.7 7.7 0 1 0 7.7 7.7A7.711 7.711 0 0 0 8 .345zm0 14.713a7.012 7.012 0 1 1 7.014-7.012A7.021 7.021 0 0 1 8 15.058zM8 2.5a5.553 5.553 0 0 0-5.548 5.546v.345h1.371V7.7h-.669a4.851 4.851 0 0 1 4.5-4.478v1.109h.69V3.223a4.851 4.851 0 0 1 4.5 4.478h-.672v.69h1.374v-.345A5.553 5.553 0 0 0 8 2.5z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = DialIcon
  } else {
    global.DialIcon = DialIcon
  }
})(this)
