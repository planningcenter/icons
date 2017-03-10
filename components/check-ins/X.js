(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var X = function X() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-x" },
  React.createElement(
    "title",
    { id: "title" },
    "x icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M14.301 4.34l-2.676-2.676L8 5.29 4.375 1.664 1.699 4.34l3.626 3.625-3.626 3.626 2.676 2.675L8 10.641l3.625 3.625 2.676-2.675-3.626-3.626 3.626-3.625z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = X;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.X = X;
  }
})(this)
