(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var LeftChevron = function LeftChevron() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-left-chevron", role: "img", className: "symbol symbol-left-chevron" },
  React.createElement(
    "title",
    { id: "title-left-chevron" },
    "left-chevron icon"
  ),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M11.657 15L6 9.343l5.657-5.657", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = LeftChevron;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.LeftChevron = LeftChevron;
  }
})(this)
