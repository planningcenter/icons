(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Clock = function Clock() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-clock" },
  React.createElement(
    "title",
    { id: "title" },
    "clock icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M8 2.028a6 6 0 1 1-6 6 6.007 6.007 0 0 1 6-6m0-2a8 8 0 1 0 8 8 8 8 0 0 0-8-8z", role: "presentation" }),
    React.createElement("path", { d: "M10.941 9.416H7.985a1 1 0 0 1-1-1v-4.6a1 1 0 0 1 2 0v3.6h1.956a1 1 0 1 1 0 2z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Clock;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Clock = Clock;
  }
})(this)
