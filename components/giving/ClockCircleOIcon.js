(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var ClockCircleOIcon = function ClockCircleOIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-clock-circle-o" },
  React.createElement(
    "title",
    { id: "title" },
    "clock-circle-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M8.797 7.734V3.742H7.19v4.591l1.86 2.151 1.216-1.051-1.469-1.699z", role: "presentation" }),
    React.createElement("path", { d: "M7.994.533a7.5 7.5 0 1 0 7.5 7.5 7.5 7.5 0 0 0-7.5-7.5zm0 13.393a5.893 5.893 0 1 1 5.893-5.893 5.9 5.9 0 0 1-5.893 5.893z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ClockCircleOIcon
  } else {
    global.ClockCircleOIcon = ClockCircleOIcon
  }
})(this)
