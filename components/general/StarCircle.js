(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var StarCircle = function StarCircle() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-star-circle", role: "img", className: "symbol symbol-star-circle" },
  React.createElement(
    "title",
    { id: "title-star-circle" },
    "star-circle icon"
  ),
  React.createElement("circle", { cx: "9", cy: "9.005", r: "7" }),
  React.createElement("path", { fill: "#fff", d: "M9 5.055l1.236 2.502L13 7.958l-2 1.947.472 2.75L9 11.357l-2.472 1.298L7 9.905 5 7.958l2.764-.401L9 5.055z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = StarCircle;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.StarCircle = StarCircle;
  }
})(this)
