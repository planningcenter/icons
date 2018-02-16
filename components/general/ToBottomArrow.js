(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ToBottomArrow = function ToBottomArrow() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-to-bottom-arrow", role: "img", className: "symbol symbol-to-bottom-arrow" },
  React.createElement(
    "title",
    { id: "title-to-bottom-arrow" },
    "to-bottom-arrow icon"
  ),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M9 2v8.445m4.343-4.343L9 10.445 4.657 6.102M2 14.723h14", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ToBottomArrow;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.ToBottomArrow = ToBottomArrow;
  }
})(this)
