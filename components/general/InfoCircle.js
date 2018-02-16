(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var InfoCircle = function InfoCircle() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-info-circle", role: "img", className: "symbol symbol-info-circle" },
  React.createElement(
    "title",
    { id: "title-info-circle" },
    "info-circle icon"
  ),
  React.createElement("circle", { cx: "9", cy: "9.005", r: "7" }),
  React.createElement("path", { fill: "#fff", d: "M10 7.505H8v-2h2zm0 5H8v-4h2z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = InfoCircle;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.InfoCircle = InfoCircle;
  }
})(this)
