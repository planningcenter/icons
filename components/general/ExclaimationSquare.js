(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ExclaimationSquare = function ExclaimationSquare() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-exclaimation-square", role: "img", className: "symbol symbol-exclaimation-square" },
  React.createElement(
    "title",
    { id: "title-exclaimation-square" },
    "exclaimation-square icon"
  ),
  React.createElement("rect", { x: "2", y: "2", width: "14", height: "14", rx: "1", ry: "1" }),
  React.createElement("path", { fill: "#fff", d: "M7.901 11.005h2v2h-2zm0-5h2v4h-2z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ExclaimationSquare;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.ExclaimationSquare = ExclaimationSquare;
  }
})(this)
