(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var DotsOutline = function DotsOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-dots-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "dots-outline icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M8 .139a7.824 7.824 0 1 0 7.824 7.824A7.833 7.833 0 0 0 8 .139zM8 15.2a7.235 7.235 0 1 1 7.235-7.235A7.243 7.243 0 0 1 8 15.2z", role: "presentation" }),
    React.createElement("path", { "class": "cls-2", d: "M4.788 6.921A1.079 1.079 0 1 1 3.708 8a1.079 1.079 0 0 1 1.08-1.079zm3.212 0A1.079 1.079 0 1 1 6.921 8 1.079 1.079 0 0 1 8 6.921zm3.212 0A1.079 1.079 0 1 1 10.133 8a1.079 1.079 0 0 1 1.079-1.079z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = DotsOutline;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.DotsOutline = DotsOutline;
  }
})(this)
