(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var RightChevron = function RightChevron() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-right-chevron", role: "img", className: "symbol symbol-right-chevron" },
  React.createElement(
    "title",
    { id: "title-right-chevron" },
    "right-chevron icon"
  ),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M7 3.686l5.657 5.657L7 15", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = RightChevron;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.RightChevron = RightChevron;
  }
})(this)
