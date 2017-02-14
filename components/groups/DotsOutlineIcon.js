(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var DotsOutlineIcon = function DotsOutlineIcon() {
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
    React.createElement("path", { d: "M8.032 2.044A5.956 5.956 0 1 1 2.108 8a5.947 5.947 0 0 1 5.924-5.956m0-1.585A7.541 7.541 0 1 0 15.532 8a7.521 7.521 0 0 0-7.5-7.541z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M4.82 7a1.079 1.079 0 1 1-1.08 1.079A1.079 1.079 0 0 1 4.82 7zm3.212 0a1.079 1.079 0 1 1-1.079 1.079A1.079 1.079 0 0 1 8.032 7zm3.213 0a1.079 1.079 0 1 1-1.079 1.079A1.079 1.079 0 0 1 11.245 7z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = DotsOutlineIcon
  } else {
    global.DotsOutlineIcon = DotsOutlineIcon
  }
})(this)