(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Check = function Check() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-check" },
  React.createElement(
    "title",
    { id: "title" },
    "check icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M16.002 4.328l-2.675-2.675-7.339 7.339-3.429-3.429-2.603 2.602 6.103 6.102.002-.002.002.002 9.939-9.939z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Check;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Check = Check;
  }
})(this)
