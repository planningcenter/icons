(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var X = function X() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-x", role: "img", className: "symbol symbol-x" },
  React.createElement(
    "title",
    { id: "title-x" },
    "x icon"
  ),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M4.05 4.055l9.9 9.9m-9.9 0l9.9-9.9", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = X;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.X = X;
  }
})(this)
