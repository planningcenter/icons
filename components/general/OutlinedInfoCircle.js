(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var OutlinedInfoCircle = function OutlinedInfoCircle() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-outlined-info-circle", role: "img", className: "symbol symbol-outlined-info-circle" },
  React.createElement(
    "title",
    { id: "title-outlined-info-circle" },
    "outlined-info-circle icon"
  ),
  React.createElement("path", { d: "M9 3.505a5.5 5.5 0 1 1-5.5 5.5 5.506 5.506 0 0 1 5.5-5.5m0-1.5a7 7 0 1 0 7 7 7 7 0 0 0-7-7z", role: "presentation" }),
  React.createElement("path", { d: "M10 7.505H8v-2h2zm0 5H8v-4h2z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = OutlinedInfoCircle;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.OutlinedInfoCircle = OutlinedInfoCircle;
  }
})(this)
