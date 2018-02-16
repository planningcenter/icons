(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Envelope = function Envelope() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-envelope", role: "img", className: "symbol symbol-envelope" },
  React.createElement(
    "title",
    { id: "title-envelope" },
    "envelope icon"
  ),
  React.createElement("rect", { x: "2", y: "4", width: "14", height: "10", rx: "1", ry: "1" }),
  React.createElement("path", { fill: "none", stroke: "#fff", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M4 7l5 3 5-3", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Envelope;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.Envelope = Envelope;
  }
})(this)
