(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var AddCircleIcon = function AddCircleIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-add-circle" },
  React.createElement(
    "title",
    { id: "title" },
    "add-circle icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M8.687 4.355H7.672v3.138H4.534v1.014h3.138v3.138h1.015V8.507h3.138V7.493H8.687zM8.179.284A7.716 7.716 0 1 0 15.9 8 7.725 7.725 0 0 0 8.179.284zm0 14.417a6.7 6.7 0 1 1 6.7-6.7 6.709 6.709 0 0 1-6.7 6.699z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = AddCircleIcon
  } else {
    global.AddCircleIcon = AddCircleIcon
  }
})(this)
