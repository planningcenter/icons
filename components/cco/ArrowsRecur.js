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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-arrows-recur" },
  React.createElement(
    "title",
    { id: "title" },
    "arrows-recur icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("polygon", { points: "13.81 4 10.76 3.6 13.41 0.96 13.81 4" }),
    React.createElement("path", { d: "M1.88,10.85a6.64,6.64,0,0,1,9.95-8.18l.83-.54A7.58,7.58,0,0,0,1.09,11.37Z", role: "presentation" }),
    React.createElement("path", { d: "M14.73,4.75l-.79.51A6.64,6.64,0,0,1,4,13.43L3.19,14A7.57,7.57,0,0,0,14.73,4.75Z", role: "presentation" }),
    React.createElement("polygon", { points: "1.98 12.02 5.03 12.42 2.39 15.07 1.98 12.02" })
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
