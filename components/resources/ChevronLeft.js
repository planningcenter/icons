(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ChevronLeft = function ChevronLeft() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-chevron_left" },
  React.createElement(
    "title",
    { id: "title" },
    "chevron_left icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M10.425 15.933a1.242 1.242 0 0 1-.881-.365L1.977 8 9.544.433a1.246 1.246 0 1 1 1.762 1.762L5.5 8l5.806 5.806a1.246 1.246 0 0 1-.881 2.127z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ChevronLeft;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.ChevronLeft = ChevronLeft;
  }
})(this)
