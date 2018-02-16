(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Search = function Search() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-search", role: "img", className: "symbol symbol-search" },
  React.createElement(
    "title",
    { id: "title-search" },
    "search icon"
  ),
  React.createElement("circle", { cx: "8.636", cy: "8.641", r: "4", fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5" }),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M11.464 11.469L15 15.005", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Search;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.Search = Search;
  }
})(this)
