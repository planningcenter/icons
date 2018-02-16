(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ArrowsRecur = function ArrowsRecur() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-arrows-recur", role: "img", className: "symbol symbol-arrows-recur" },
  React.createElement(
    "title",
    { id: "title-arrows-recur" },
    "arrows-recur icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M13.81 4.005L10.762 3.6 13.406.956l.404 3.049z", role: "presentation" }),
    React.createElement("path", { d: "M1.877 10.851a6.642 6.642 0 0 1 9.949-8.181l.83-.544A7.577 7.577 0 0 0 1.09 11.365zm12.852-6.102l-.786.515a6.644 6.644 0 0 1-9.924 8.164l-.83.543a7.575 7.575 0 0 0 11.54-9.222z", role: "presentation" }),
    React.createElement("path", { d: "M1.982 12.018l3.048.404-2.644 2.644-.404-3.048z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ArrowsRecur;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.ArrowsRecur = ArrowsRecur;
  }
})(this)
