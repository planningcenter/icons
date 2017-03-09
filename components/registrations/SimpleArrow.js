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
  React.createElement("path", { "class": "cls-1", d: "M9.178 1.378L7.456 3.136l3.703 3.779H.179V9.4h10.98l-3.703 3.779 1.722 1.758 6.643-6.78-6.643-6.779z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = SimpleArrow;
  } else {
    global.RegistrationsIcon = global.RegistrationsIcon || {};
    global.RegistrationsIcon.SimpleArrow = SimpleArrow;
  }
})(this)
