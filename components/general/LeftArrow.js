(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var LeftArrow = function LeftArrow() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-left-arrow", role: "img", className: "symbol symbol-left-arrow" },
  React.createElement(
    "title",
    { id: "title-left-arrow" },
    "left-arrow icon"
  ),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M15 9.348H4m5.657 5.657L4 9.348l5.657-5.657", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = LeftArrow;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.LeftArrow = LeftArrow;
  }
})(this)
