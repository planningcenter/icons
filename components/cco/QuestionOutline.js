(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var QuestionOutline = function QuestionOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-question-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "question-outline icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M8,1.15A6.85,6.85,0,1,1,1.15,8,6.86,6.86,0,0,1,8,1.15M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Z", role: "presentation" }),
    React.createElement("path", { d: "M8,13.43a1.17,1.17,0,0,1-1.12-1.08.19.19,0,0,1,0-.05.18.18,0,0,1,0-.06,1.13,1.13,0,0,1,2.25.06A1.16,1.16,0,0,1,8,13.43Zm2.24-6.12c-.49.45-2.28,1.29-1.4,2.13a.18.18,0,0,1-.08.31l-1.2.41a.18.18,0,0,1-.18,0,1.91,1.91,0,0,1-.52-1.24.18.18,0,0,1,0,0,.2.2,0,0,1,0,0c.07-1.1.92-1.51,1.69-2.15.51-.42.76-1.28-.14-1.49A2.16,2.16,0,0,0,6.16,6,.18.18,0,0,1,5.9,6L5,5a.19.19,0,0,1,0-.26A4,4,0,0,1,8.44,3.32a2.71,2.71,0,0,1,2.37,1.45A2.28,2.28,0,0,1,10.22,7.31Z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = QuestionOutline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.QuestionOutline = QuestionOutline;
  }
})(this)
