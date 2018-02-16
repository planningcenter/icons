(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var OutlinedClockCircle = function OutlinedClockCircle() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-outlined-clock-circle", role: "img", className: "symbol symbol-outlined-clock-circle" },
  React.createElement(
    "title",
    { id: "title-outlined-clock-circle" },
    "outlined-clock-circle icon"
  ),
  React.createElement("path", { d: "M9 3.505a5.5 5.5 0 1 1-5.5 5.5 5.506 5.506 0 0 1 5.5-5.5m0-1.5a7 7 0 1 0 7 7 7 7 0 0 0-7-7z", role: "presentation" }),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M9 6.005v4l3 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = OutlinedClockCircle;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.OutlinedClockCircle = OutlinedClockCircle;
  }
})(this)
