(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Scholarship = function Scholarship() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-scholarship" },
  React.createElement(
    "title",
    { id: "title" },
    "scholarship icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M11.94 9.465a5.55 5.55 0 1 0-7.994.007l-1.967 4.576 2.609.019 1.827 1.883 1.528-3.592 1.528 3.592 1.829-1.883 2.609-.019zm-4-7.868A4.017 4.017 0 1 1 3.936 5.6a4.029 4.029 0 0 1 4.008-4zM5.893 13.21l-.652-.671-.932-.019.891-2.069a5.5 5.5 0 0 0 1.611.612zm4.753-.671l-.652.671-.92-2.148a5.492 5.492 0 0 0 1.614-.617l.891 2.075z", role: "presentation" }),
    React.createElement("path", { d: "M7.944 8.02a2.406 2.406 0 1 0-2.4-2.411 2.4 2.4 0 0 0 2.4 2.411z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Scholarship;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Scholarship = Scholarship;
  }
})(this)
