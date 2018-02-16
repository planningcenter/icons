(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var RightCaret1 = function RightCaret1() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-right-caret_1", role: "img", className: "symbol symbol-right-caret_1" },
  React.createElement(
    "title",
    { id: "title-right-caret_1" },
    "right-caret_1 icon"
  ),
  React.createElement("path", { d: "M6 9.581l4.197 3.446V6.135L6 9.581z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = RightCaret1;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.RightCaret1 = RightCaret1;
  }
})(this)
