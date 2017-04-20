(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Trash = function Trash() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-trash" },
  React.createElement(
    "title",
    { id: "title" },
    "trash icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement(
      "g",
      { "data-name": "Layer 5" },
      React.createElement("path", { d: "M10.26 1.48V.24H5.74v1.24h-5v1.7H2v10.54a2.08 2.08 0 0 0 2.1 2h7.68a2.08 2.08 0 0 0 2.1-2V3.18h1.36v-1.7zm1.88 12.24a.35.35 0 0 1-.36.35H4.11a.35.35 0 0 1-.36-.35V3.18h8.39z", role: "presentation" }),
      React.createElement("path", { d: "M5.62 5.15h1.75v7.05H5.62zm2.9 0h1.75v7.05H8.52z", role: "presentation" })
    )
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Trash;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.Trash = Trash;
  }
})(this)
