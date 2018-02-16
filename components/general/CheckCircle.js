(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var CheckCircle = function CheckCircle() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-check-circle", role: "img", className: "symbol symbol-check-circle" },
  React.createElement(
    "title",
    { id: "title-check-circle" },
    "check-circle icon"
  ),
  React.createElement("circle", { cx: "9", cy: "9", r: "7" }),
  React.createElement("path", { fill: "none", stroke: "#fff", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M6 8.625l2.25 2.25L12 7.125", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CheckCircle;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.CheckCircle = CheckCircle;
  }
})(this)
