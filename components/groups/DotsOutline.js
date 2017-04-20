(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var DotsOutline = function DotsOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-dots-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "dots-outline icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M8 2a6 6 0 1 1-5.89 6A5.95 5.95 0 0 1 8 2M8 .46A7.54 7.54 0 1 0 15.53 8 7.52 7.52 0 0 0 8 .46z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M4.82 7a1.08 1.08 0 1 1-1.08 1.08A1.08 1.08 0 0 1 4.82 7zM8 7a1.08 1.08 0 1 1-1 1.08A1.08 1.08 0 0 1 8 7zm3.24 0a1.08 1.08 0 1 1-1.08 1.08A1.08 1.08 0 0 1 11.24 7z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = DotsOutline;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.DotsOutline = DotsOutline;
  }
})(this)
