(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var SimpleArrow = function SimpleArrow() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-simple-arrow" },
  React.createElement(
    "title",
    { id: "title" },
    "simple-arrow icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("polygon", { points: "9.18 1.22 7.46 2.98 11.16 6.76 0.18 6.76 0.18 9.24 11.16 9.24 7.46 13.02 9.18 14.78 15.82 8 9.18 1.22", style: "fill:#010201" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = SimpleArrow;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.SimpleArrow = SimpleArrow;
  }
})(this)
