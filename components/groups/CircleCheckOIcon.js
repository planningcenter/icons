(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var CircleCheckOIcon = function CircleCheckOIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-circle-check-o" },
  React.createElement(
    "title",
    { id: "title" },
    "circle-check-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement(
      "g",
      { "data-name": "Layer 5" },
      React.createElement("path", { d: "M8.016 2.044A5.956 5.956 0 1 1 2.092 8a5.947 5.947 0 0 1 5.924-5.956m0-1.585A7.541 7.541 0 1 0 15.516 8a7.521 7.521 0 0 0-7.5-7.541z", role: "presentation" }),
      React.createElement("path", { d: "M10.764 5.177L7.073 8.891 5.267 7.074l-1.124 1.13 2.927 2.944.048-.05.002.003 4.768-4.795-1.124-1.129z", role: "presentation" })
    )
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CircleCheckOIcon
  } else {
    global.CircleCheckOIcon = CircleCheckOIcon
  }
})(this)
