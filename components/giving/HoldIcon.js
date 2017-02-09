(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var HoldIcon = function HoldIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-hold" },
  React.createElement(
    "title",
    { id: "title" },
    "hold icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M2.085 7.975L8.04 13.93a.1.1 0 0 0 .148 0l5.955-5.955a.1.1 0 0 0 0-.148L8.188 1.872a.1.1 0 0 0-.148 0L2.085 7.827a.1.1 0 0 0 0 .148zM7.9 15.7L.316 8.112a.3.3 0 0 1 0-.421L7.9.1a.3.3 0 0 1 .421 0l7.588 7.588a.3.3 0 0 1 0 .421L8.325 15.7a.3.3 0 0 1-.425 0z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M5.934 5.658h1.689v4.501H5.934zm2.687 0h1.693v4.501H8.621z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = HoldIcon
  } else {
    global.HoldIcon = HoldIcon
  }
})(this)
