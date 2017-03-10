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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-search" },
  React.createElement(
    "title",
    { id: "title" },
    "search icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M15.606 13.56l-3.8-3.8a6.185 6.185 0 0 0 .9-3.227A6.548 6.548 0 0 0 6.3.129 6.216 6.216 0 0 0 .087 6.346a6.548 6.548 0 0 0 6.407 6.407 6.186 6.186 0 0 0 3.13-.846l3.817 3.818a.956.956 0 0 0 1.353 0l.947-.947c.374-.378.238-.844-.135-1.218zM2 6.346a4.3 4.3 0 0 1 4.3-4.3 4.637 4.637 0 0 1 4.5 4.495 4.3 4.3 0 0 1-4.3 4.3A4.637 4.637 0 0 1 2 6.346z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Search;
  } else {
    global.InterfacesIcon = global.InterfacesIcon || {};
    global.InterfacesIcon.Search = Search;
  }
})(this)
