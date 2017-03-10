(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ChevronRight = function ChevronRight() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-chevron-right" },
  React.createElement(
    "title",
    { id: "title" },
    "chevron-right icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M13.553 7.933L4.586.066l-2.018 1.77 6.95 6.1-7.072 6.219 2.017 1.77z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ChevronRight;
  } else {
    global.InterfacesIcon = global.InterfacesIcon || {};
    global.InterfacesIcon.ChevronRight = ChevronRight;
  }
})(this)
