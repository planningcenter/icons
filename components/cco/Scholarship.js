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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-scholarship", role: "img", className: "symbol symbol-scholarship" },
  React.createElement(
    "title",
    { id: "title-scholarship" },
    "scholarship icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M11.94 9.465a5.55 5.55 0 1 0-7.995.007l-1.966 4.576 2.61.019 1.826 1.882 1.529-3.591 1.528 3.591 1.828-1.882 2.609-.019zm-4-7.867a4.017 4.017 0 1 1-4.004 4.007A4.028 4.028 0 0 1 7.944 1.6zM5.893 13.21l-.652-.671-.932-.019.891-2.069a5.525 5.525 0 0 0 1.611.611zm4.753-.671l-.652.671-.92-2.148a5.467 5.467 0 0 0 1.613-.618l.891 2.076z", role: "presentation" }),
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
