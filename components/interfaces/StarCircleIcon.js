(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var StarCircleIcon = function StarCircleIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-star-circle" },
  React.createElement(
    "title",
    { id: "title" },
    "star-circle icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M8 0a7.977 7.977 0 1 0 7.977 7.977A7.977 7.977 0 0 0 8 0zm4.651 7.282L10.62 9.259l.479 2.79a.411.411 0 0 1-.406.481.406.406 0 0 1-.192-.048L8 11.166l-2.509 1.317a.411.411 0 0 1-.6-.433l.479-2.79-2.024-1.977a.411.411 0 0 1 .228-.7l2.8-.407 1.254-2.539a.428.428 0 0 1 .738 0l1.252 2.538 2.8.407a.411.411 0 0 1 .228.7z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = StarCircleIcon
  } else {
    global.StarCircleIcon = StarCircleIcon
  }
})(this)
