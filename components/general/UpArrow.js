(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var UpArrow = function UpArrow() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-up-arrow", role: "img", className: "symbol symbol-up-arrow" },
  React.createElement(
    "title",
    { id: "title-up-arrow" },
    "up-arrow icon"
  ),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M9.343 15.005v-11M3.686 9.662l5.657-5.657L15 9.662", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = UpArrow;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.UpArrow = UpArrow;
  }
})(this)
