(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Apple = function Apple() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-apple" },
  React.createElement(
    "title",
    { id: "title" },
    "apple icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M8.68 1.39A3.42 3.42 0 0 1 11.19 0a3.42 3.42 0 0 1-.83 2.56A2.7 2.7 0 0 1 8 3.68a3 3 0 0 1 .68-2.29zm-.56 3.2c.54 0 1.54-.74 2.85-.74a3.57 3.57 0 0 1 3.13 1.6 3.47 3.47 0 0 0-1.73 3 3.56 3.56 0 0 0 2.16 3.26S13 16 11 16c-.93 0-1.66-.63-2.65-.63s-2 .65-2.65.65c-1.86 0-4.21-4-4.21-7.26s2-4.85 3.85-4.85c1.21 0 2.15.7 2.78.7z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Apple;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Apple = Apple;
  }
})(this)
