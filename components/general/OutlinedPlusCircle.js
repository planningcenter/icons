(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var OutlinedPlusCircle = function OutlinedPlusCircle() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-outlined-plus-circle", role: "img", className: "symbol symbol-outlined-plus-circle" },
  React.createElement(
    "title",
    { id: "title-outlined-plus-circle" },
    "outlined-plus-circle icon"
  ),
  React.createElement("path", { d: "M9 3.505a5.5 5.5 0 1 1-5.5 5.5 5.506 5.506 0 0 1 5.5-5.5m0-1.5a7 7 0 1 0 7 7 7 7 0 0 0-7-7z", role: "presentation" }),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M6 9.005h6m-3 3v-6", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = OutlinedPlusCircle;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.OutlinedPlusCircle = OutlinedPlusCircle;
  }
})(this)
