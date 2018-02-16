(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var DownChevron = function DownChevron() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-down-chevron", role: "img", className: "symbol symbol-down-chevron" },
  React.createElement(
    "title",
    { id: "title-down-chevron" },
    "down-chevron icon"
  ),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M15 7l-5.657 5.657L3.686 7", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = DownChevron;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.DownChevron = DownChevron;
  }
})(this)
