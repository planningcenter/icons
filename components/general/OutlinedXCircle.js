(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var OutlinedXCircle = function OutlinedXCircle() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-outlined-x-circle", role: "img", className: "symbol symbol-outlined-x-circle" },
  React.createElement(
    "title",
    { id: "title-outlined-x-circle" },
    "outlined-x-circle icon"
  ),
  React.createElement("path", { d: "M9 3.505a5.5 5.5 0 1 1-3.889 1.611A5.464 5.464 0 0 1 9 3.505m0-1.5a7 7 0 1 0 4.95 2.05A6.979 6.979 0 0 0 9 2.005z", role: "presentation" }),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M6.879 6.884l4.242 4.242m-4.242 0l4.242-4.242", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = OutlinedXCircle;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.OutlinedXCircle = OutlinedXCircle;
  }
})(this)
