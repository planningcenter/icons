(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Categories = function Categories() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-categories" },
  React.createElement(
    "title",
    { id: "title" },
    "categories icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M1.47 1.76a1.37 1.37 0 1 0 1.37 1.37 1.37 1.37 0 0 0-1.37-1.37zm0 4.79a1.37 1.37 0 1 0 1.37 1.37 1.37 1.37 0 0 0-1.37-1.37zm0 4.79a1.37 1.37 0 1 0 1.37 1.37 1.37 1.37 0 0 0-1.37-1.36zM4.9 13.4h11V12h-11zm0-4.79h11V7.24h-11zm0-6.16v1.36h11V2.44z", "fill-rule": "evenodd", "data-name": "Layer 33", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Categories;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.Categories = Categories;
  }
})(this)
