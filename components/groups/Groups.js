(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Groups = function Groups() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-groups" },
  React.createElement(
    "title",
    { id: "title" },
    "groups icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M13.16 9.14V6.82a3.33 3.33 0 1 0-3.95-3.91H6.74a3.33 3.33 0 1 0-3.82 3.93v2.31A3.33 3.33 0 1 0 6.75 13h2.46a3.33 3.33 0 1 0 3.95-3.86zm-.71-7.57a2 2 0 1 1-2 2 2 2 0 0 1 1.99-2zm-11 2a2 2 0 1 1 2 2 2 2 0 0 1-1.97-2.04zm2 10.83a2 2 0 1 1 2-2 2 2 0 0 1-2.01 1.97zm5.77-2.6H6.73a3.33 3.33 0 0 0-2.58-2.6V6.82a3.34 3.34 0 0 0 2.6-2.67H9.2a3.33 3.33 0 0 0 2.72 2.69v2.29a3.33 3.33 0 0 0-2.71 2.64zm3.23 2.6a2 2 0 1 1 2-2 2 2 0 0 1-2.01 1.97z", "data-name": "Layer 39", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Groups;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.Groups = Groups;
  }
})(this)
