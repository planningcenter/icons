(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ArrowsMerging = function ArrowsMerging() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-arrows-merging" },
  React.createElement(
    "title",
    { id: "title" },
    "arrows-merging icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M11.71 9H7.39A6.49 6.49 0 0 1 .91 2.52V1.16a1 1 0 1 1 2 0v1.36A4.49 4.49 0 0 0 7.39 7h4.32a1 1 0 0 1 0 2z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M1.91 15.84a1 1 0 0 1-1-1v-1.36A6.49 6.49 0 0 1 7.39 7h5a1 1 0 0 1 0 2h-5a4.49 4.49 0 0 0-4.48 4.48v1.36a1 1 0 0 1-1 1z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M10.23 13.06a1 1 0 0 1-.71-1.71L12.88 8 9.52 4.64a1 1 0 1 1 1.41-1.41L15 7.29a1 1 0 0 1 0 1.41l-4.06 4.06a1 1 0 0 1-.71.3z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ArrowsMerging;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.ArrowsMerging = ArrowsMerging;
  }
})(this)
