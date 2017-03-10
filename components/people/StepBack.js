(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var StepBack = function StepBack() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-step-back" },
  React.createElement(
    "title",
    { id: "title" },
    "step-back icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M13.05 6.984H6.84l1.847-1.847L7.25 3.7 2.95 8l4.3 4.3 1.437-1.437L6.84 9.016h6.21V6.984z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = StepBack;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.StepBack = StepBack;
  }
})(this)
