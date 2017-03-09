(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Check = function Check() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-check" },
  React.createElement(
    "title",
    { id: "title" },
    "check icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("rect", { x: "3.36", y: "8.97", width: "2.56", height: "0.99" }),
    React.createElement("rect", { x: "3.36", y: "6.91", width: "7.92", height: "0.99" }),
    React.createElement("rect", { x: "3.36", y: "4.93", width: "3.73", height: "0.99" }),
    React.createElement("rect", { x: "6.7", y: "8.97", width: "2.56", height: "0.99" }),
    React.createElement("polygon", { points: "10.19 9.96 11.18 8.97 10.09 8.97 10.09 9.96 10.19 9.96" }),
    React.createElement("path", { d: "M14.62,12h-1l-1.35,1.35h3.12a.61.61,0,0,0,.61-.61V9.59l-1.35,1.35Z", role: "presentation" }),
    React.createElement("path", { d: "M1.33,3.09H14.62V5.6L16,4.26V2.35a.61.61,0,0,0-.61-.61H.59A.61.61,0,0,0,0,2.35V12.72a.61.61,0,0,0,.61.61H6.86L8.2,12H1.33Z", role: "presentation" }),
    React.createElement("rect", { x: "9.49", y: "9.05", width: "6.88", height: "1.77", transform: "translate(-3.24 12.06) rotate(-45.01)" }),
    React.createElement("polygon", { points: "8.88 12.73 8.93 13.97 10.13 13.99 10.63 13.49 9.38 12.24 8.88 12.73" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Check;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Check = Check;
  }
})(this)
