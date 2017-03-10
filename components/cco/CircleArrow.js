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
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M9.354 11.354l-.708-.708L11.793 7.5 8.646 4.354l.708-.708L13.207 7.5l-3.853 3.854z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M4 7h8.5v1H4z", role: "presentation" })
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
