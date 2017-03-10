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
  React.createElement("path", { className: "cls-1", d: "M9.178 1.221L7.456 2.978l3.703 3.779H.179v2.486h10.98l-3.703 3.779 1.722 1.757L15.821 8 9.178 1.221z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = SimpleArrow;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.SimpleArrow = SimpleArrow;
  }
})(this)
