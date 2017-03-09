(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var CheckCircleO = function CheckCircleO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-check-circle-o" },
  React.createElement(
    "title",
    { id: "title" },
    "check-circle-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M8.032 2.054A5.956 5.956 0 1 1 2.108 8.01a5.947 5.947 0 0 1 5.924-5.956m0-1.585a7.541 7.541 0 1 0 7.5 7.541 7.521 7.521 0 0 0-7.5-7.541z", role: "presentation" }),
    React.createElement("path", { d: "M10.78 5.186L7.089 8.9 5.283 7.084l-1.124 1.13 2.927 2.943.048-.05.002.003 4.768-4.794-1.124-1.13z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CheckCircleO;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.CheckCircleO = CheckCircleO;
  }
})(this)
