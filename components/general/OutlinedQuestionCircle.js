(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var OutlinedQuestionCircle = function OutlinedQuestionCircle() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-outlined-question-circle", role: "img", className: "symbol symbol-outlined-question-circle" },
  React.createElement(
    "title",
    { id: "title-outlined-question-circle" },
    "outlined-question-circle icon"
  ),
  React.createElement("path", { d: "M9 4.046a5.5 5.5 0 1 1-5.5 5.5 5.506 5.506 0 0 1 5.5-5.5m0-1.5a7 7 0 1 0 7 7 7 7 0 0 0-7-7z", role: "presentation" }),
  React.createElement("path", { d: "M7.289 8.035a1.716 1.716 0 0 1 3.383-.41v.022a1.755 1.755 0 0 1-.502 1.573l-.5.508A2.342 2.342 0 0 0 9 11.367m0 .816v1.219", fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = OutlinedQuestionCircle;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.OutlinedQuestionCircle = OutlinedQuestionCircle;
  }
})(this)
