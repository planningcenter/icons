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
      React.createElement("path", { d: "M10.259 1.481V.237H5.741v1.244H.75v1.7H2v10.536a2.078 2.078 0 0 0 2.1 2.046h7.677a2.078 2.078 0 0 0 2.1-2.046V3.179h1.373v-1.7zm1.881 12.236a.353.353 0 0 1-.358.348H4.106a.353.353 0 0 1-.357-.348V3.179h8.391z", role: "presentation" }),
      React.createElement("path", { d: "M5.621 5.151h1.747V12.2H5.621zm2.9 0h1.747V12.2H8.521z", role: "presentation" })
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
