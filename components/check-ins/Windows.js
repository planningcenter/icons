(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Windows = function Windows() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-windows" },
  React.createElement(
    "title",
    { id: "title" },
    "windows icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M0 2.27l6.52-.89v6.29L0 7.7zm6.54 6.12v6.29L0 13.79V8.35zm.79-7.13L16 0v7.59l-8.64.07zM16 8.45V16l-8.67-1.22V8.43z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Windows;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Windows = Windows;
  }
})(this)
