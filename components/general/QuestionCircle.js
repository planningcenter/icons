(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var QuestionCircle = function QuestionCircle() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-question-circle", role: "img", className: "symbol symbol-question-circle" },
  React.createElement(
    "title",
    { id: "title-question-circle" },
    "question-circle icon"
  ),
  React.createElement("circle", { cx: "9.015", cy: "9.546", r: "7" }),
  React.createElement("path", { d: "M7.3 8.035a1.716 1.716 0 0 1 3.383-.41l.005.022a1.755 1.755 0 0 1-.507 1.573l-.5.508a2.342 2.342 0 0 0-.669 1.639m.003.816v1.219", fill: "none", stroke: "#fff", "stroke-miterlimit": "10", "stroke-width": "1.5", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = QuestionCircle;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.QuestionCircle = QuestionCircle;
  }
})(this)
