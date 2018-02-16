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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-up-arrow", role: "img", className: "symbol symbol-up-arrow" },
  React.createElement(
    "title",
    { id: "title-up-arrow" },
    "up-arrow icon"
  ),
  React.createElement("path", { d: "M8.183.985L0 8.855v1.259h4.091v4.407h7.554v-4.407h4.406V9.17zm2.365 8.061v4.325h-5.36V9.046H1.322l6.852-6.554 6.256 6.554z", "fill-rule": "evenodd", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = UpArrow;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.UpArrow = UpArrow;
  }
})(this)
