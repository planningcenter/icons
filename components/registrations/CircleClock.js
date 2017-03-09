(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var CircleClock = function CircleClock() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-circle-clock" },
  React.createElement(
    "title",
    { id: "title" },
    "circle-clock icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M8.047 16.07a8.021 8.021 0 1 1 8.021-8.021 8.03 8.03 0 0 1-8.021 8.021zm0-14.673A6.652 6.652 0 1 0 14.7 8.049 6.66 6.66 0 0 0 8.047 1.4z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M10.933 10.276c-.108 0-.12-.026-.222-.079L7.583 8.5V4.083a.777.777 0 0 1 1.543 0V7.67l2.311 1.316a.658.658 0 0 1 .194.925.836.836 0 0 1-.698.365z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CircleClock;
  } else {
    global.RegistrationsIcon = global.RegistrationsIcon || {};
    global.RegistrationsIcon.CircleClock = CircleClock;
  }
})(this)
