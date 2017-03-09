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
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M8,2A6,6,0,1,1,2,8,6,6,0,0,1,8,2M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Z", role: "presentation" }),
    React.createElement("path", { d: "M10.94,9.42H8a1,1,0,0,1-1-1V3.82a1,1,0,0,1,2,0v3.6h2a1,1,0,1,1,0,2Z", role: "presentation" })
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
