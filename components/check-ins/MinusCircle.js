(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var MinusCircle = function MinusCircle() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-minus-circle", role: "img", className: "symbol symbol-minus-circle" },
  React.createElement(
    "title",
    { id: "title-minus-circle" },
    "minus-circle icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M8 .006A7.994 7.994 0 1 0 15.994 8 8 8 0 0 0 8 .006zm0 14.317A6.323 6.323 0 1 1 14.323 8 6.323 6.323 0 0 1 8 14.323z", role: "presentation" }),
    React.createElement("path", { d: "M10.989 7.176H4.967a.807.807 0 0 0 0 1.613h6.022a.807.807 0 0 0 0-1.613z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = MinusCircle;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.MinusCircle = MinusCircle;
  }
})(this)
