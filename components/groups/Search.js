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
  { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-search" },
  React.createElement(
    "title",
    { id: "title" },
    "search icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M15.61 13.56l-3.8-3.8a6.18 6.18 0 0 0 .9-3.23A6.55 6.55 0 0 0 6.3.13 6.22 6.22 0 0 0 .09 6.35a6.55 6.55 0 0 0 6.41 6.41 6.19 6.19 0 0 0 3.13-.85l3.82 3.82a1 1 0 0 0 1.35 0l.95-.95c.36-.38.25-.85-.14-1.22zM2 6.35A4.3 4.3 0 0 1 6.3 2a4.64 4.64 0 0 1 4.5 4.49 4.3 4.3 0 0 1-4.3 4.3A4.64 4.64 0 0 1 2 6.35z", "data-name": "Layer 36", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Search;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.Search = Search;
  }
})(this)
