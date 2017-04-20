(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var HangTag = function HangTag() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-hang-tag" },
  React.createElement(
    "title",
    { id: "title" },
    "hang-tag icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement(
      "g",
      { "data-name": "Layer 5" },
      React.createElement("path", { d: "M7.54 15.93a1.29 1.29 0 0 1-.92-.38L.4 9.33a1.3 1.3 0 0 1 0-1.83l7-7A1.31 1.31 0 0 1 8.54.08l5.39.85A1.29 1.29 0 0 1 15 2l.85 5.36a1.3 1.3 0 0 1-.36 1.11l-7 7a1.29 1.29 0 0 1-.95.46zm.14-1.44zM1.61 8.41l5.94 5.94 6.83-6.83-.81-5.13-5.14-.81zm12.1-6zm-.17-.16z", role: "presentation" }),
      React.createElement("path", { d: "M10.64 7a1.87 1.87 0 0 1-1.32-3.2 1.92 1.92 0 0 1 2.65 0A1.87 1.87 0 0 1 12 6.5a1.87 1.87 0 0 1-1.36.5zm.85-1zm-.85-1.4a.54.54 0 0 0-.38.16.54.54 0 0 0 .77.77.55.55 0 0 0 0-.77.54.54 0 0 0-.39-.13z", role: "presentation" })
    )
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = HangTag;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.HangTag = HangTag;
  }
})(this)
