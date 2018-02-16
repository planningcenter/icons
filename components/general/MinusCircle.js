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
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-minus-circle", role: "img", className: "symbol symbol-minus-circle" },
  React.createElement(
    "title",
    { id: "title-minus-circle" },
    "minus-circle icon"
  ),
  React.createElement("circle", { cx: "9", cy: "9.005", r: "7" }),
  React.createElement("path", { fill: "none", stroke: "#fff", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M6 9.005h6", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = MinusCircle;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.MinusCircle = MinusCircle;
  }
})(this)
