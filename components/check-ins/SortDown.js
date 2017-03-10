(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var SortDown = function SortDown() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-sort-down" },
  React.createElement(
    "title",
    { id: "title" },
    "sort-down icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M3 0v12H0l4 4 4-4H5V0zm4 0v2h9V0zm0 4v2h7V4zm0 4v2h5V8z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = SortDown;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.SortDown = SortDown;
  }
})(this)
