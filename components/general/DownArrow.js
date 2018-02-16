(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var DownArrow = function DownArrow() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-down-arrow", role: "img", className: "symbol symbol-down-arrow" },
  React.createElement(
    "title",
    { id: "title-down-arrow" },
    "down-arrow icon"
  ),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M9.343 3.005v11M15 8.348l-5.657 5.657-5.657-5.657", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = DownArrow;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.DownArrow = DownArrow;
  }
})(this)
