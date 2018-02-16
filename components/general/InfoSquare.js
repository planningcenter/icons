(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var InfoSquare = function InfoSquare() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-info-square", role: "img", className: "symbol symbol-info-square" },
  React.createElement(
    "title",
    { id: "title-info-square" },
    "info-square icon"
  ),
  React.createElement("rect", { x: "2", y: "2", width: "14", height: "14", rx: "1", ry: "1", transform: "rotate(180 9 9)" }),
  React.createElement("path", { fill: "#fff", d: "M10.099 7.995h-2v-2h2zm0 5h-2v-4h2z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = InfoSquare;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.InfoSquare = InfoSquare;
  }
})(this)
