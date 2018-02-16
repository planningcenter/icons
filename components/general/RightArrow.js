(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var RightArrow = function RightArrow() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-right-arrow", role: "img", className: "symbol symbol-right-arrow" },
  React.createElement(
    "title",
    { id: "title-right-arrow" },
    "right-arrow icon"
  ),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M3 9.348h11M8.343 3.691L14 9.348l-5.657 5.657", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = RightArrow;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.RightArrow = RightArrow;
  }
})(this)
