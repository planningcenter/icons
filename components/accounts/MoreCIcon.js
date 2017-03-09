(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var MoreCIcon = function MoreCIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-more-c" },
  React.createElement(
    "title",
    { id: "title" },
    "more-c icon"
  ),
  React.createElement(
    "g",
    { fill: "#231f20", "data-name": "Layer 1" },
    React.createElement("path", { d: "M8 .11A7.89 7.89 0 1 0 15.89 8 7.9 7.9 0 0 0 8 .11zm0 14.57A6.68 6.68 0 1 1 14.68 8 6.68 6.68 0 0 1 8 14.68z", role: "presentation" }),
    React.createElement("circle", { cx: "4.36", cy: "8", r: "1.21" }),
    React.createElement("circle", { cx: "11.64", cy: "8", r: "1.21" }),
    React.createElement("circle", { cx: "8", cy: "8", r: "1.21" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = MoreCIcon
  } else {
    global.MoreCIcon = MoreCIcon
  }
})(this)
