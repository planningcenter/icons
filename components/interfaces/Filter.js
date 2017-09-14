(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Filter = function Filter() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-filter", role: "img", className: "symbol symbol-filter" },
  React.createElement(
    "title",
    { id: "title-filter" },
    "filter icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M.594 4h14.813v1.281H.594zM2.84 7.359h10.319V8.64H2.84zm3.345 3.36h3.629V12H6.185z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Filter;
  } else {
    global.InterfacesIcon = global.InterfacesIcon || {};
    global.InterfacesIcon.Filter = Filter;
  }
})(this)
