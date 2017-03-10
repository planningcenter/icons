(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ToArrow = function ToArrow() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-to-arrow" },
  React.createElement(
    "title",
    { id: "title" },
    "to-arrow icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M14.173 7.78L9.79 3.441a.913.913 0 0 0-1.283 0 .891.891 0 0 0 0 1.27l2.835 2.807H2.468a.9.9 0 1 0 0 1.8h8.874L8.507 12.12a.891.891 0 0 0 0 1.27.913.913 0 0 0 1.283 0l4.383-4.34a.891.891 0 0 0 0-1.27z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ToArrow;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.ToArrow = ToArrow;
  }
})(this)
