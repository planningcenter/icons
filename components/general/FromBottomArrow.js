(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FromBottomArrow = function FromBottomArrow() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-from-bottom-arrow", role: "img", className: "symbol symbol-from-bottom-arrow" },
  React.createElement(
    "title",
    { id: "title-from-bottom-arrow" },
    "from-bottom-arrow icon"
  ),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M9 11V2.555M4.657 6.898L9 2.555l4.343 4.343M2 14.723h14", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FromBottomArrow;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.FromBottomArrow = FromBottomArrow;
  }
})(this)
