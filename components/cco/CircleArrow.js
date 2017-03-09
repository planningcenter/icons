(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var CircleArrow = function CircleArrow() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-circle-arrow" },
  React.createElement(
    "title",
    { id: "title" },
    "circle-arrow icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("polygon", { points: "9.35 11.35 8.65 10.65 11.79 7.5 8.65 4.35 9.35 3.65 13.21 7.5 9.35 11.35", style: "fill:#231f20" }),
    React.createElement("rect", { x: "4", y: "7", width: "8.5", height: "1", style: "fill:#231f20" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CircleArrow;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.CircleArrow = CircleArrow;
  }
})(this)
