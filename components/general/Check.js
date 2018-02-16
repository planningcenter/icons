(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Check = function Check() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-check", role: "img", className: "symbol symbol-check" },
  React.createElement(
    "title",
    { id: "title-check" },
    "check icon"
  ),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M4 8.505l3.75 3.75L14 6.005", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Check;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.Check = Check;
  }
})(this)
