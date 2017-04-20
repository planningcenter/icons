(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Promote = function Promote() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-promote" },
  React.createElement(
    "title",
    { id: "title" },
    "promote icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M12.4 9.95L10.32 6.1a3.41 3.41 0 1 0-4.92-.3L3.17 10a2.9 2.9 0 1 0 1.56.17L6.57 6.7A3.21 3.21 0 0 0 9 6.87l1.89 3.51a2.91 2.91 0 1 0 1.52-.43zm-7 2.92a1.75 1.75 0 1 1-1.75-1.75 1.75 1.75 0 0 1 1.72 1.74zm7 1.76a1.76 1.76 0 1 1 1.76-1.76 1.76 1.76 0 0 1-1.78 1.76z", "fill-rule": "evenodd", "data-name": "Layer 5", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Promote;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.Promote = Promote;
  }
})(this)
