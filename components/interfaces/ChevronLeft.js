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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-chevron-left" },
  React.createElement(
    "title",
    { id: "title" },
    "chevron-left icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M2.451 8.07l8.967 7.867 2.018-1.77-6.95-6.1 7.072-6.222L11.54.078z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ChevronLeft;
  } else {
    global.InterfacesIcon = global.InterfacesIcon || {};
    global.InterfacesIcon.ChevronLeft = ChevronLeft;
  }
})(this)
