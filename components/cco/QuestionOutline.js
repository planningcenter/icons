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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-question-outline", role: "img", className: "symbol symbol-question-outline" },
  React.createElement(
    "title",
    { id: "title-question-outline" },
    "question-outline icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M8 1.146A6.854 6.854 0 1 1 1.146 8 6.862 6.862 0 0 1 8 1.146M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8z", role: "presentation" }),
    React.createElement("path", { d: "M7.977 13.433a1.167 1.167 0 0 1-1.122-1.085.187.187 0 0 1 0-.055.2.2 0 0 1 0-.057 1.126 1.126 0 0 1 2.25.057 1.159 1.159 0 0 1-1.128 1.14zm2.244-6.125c-.493.451-2.276 1.291-1.4 2.134a.184.184 0 0 1-.08.306l-1.2.405a.183.183 0 0 1-.178-.047 1.909 1.909 0 0 1-.523-1.244.172.172 0 0 1 0-.046.191.191 0 0 1 0-.049c.068-1.1.925-1.512 1.686-2.148.507-.422.756-1.282-.139-1.486a2.162 2.162 0 0 0-2.225.831.182.182 0 0 1-.259 0q-.456-.507-.916-1.012a.187.187 0 0 1 0-.259 3.984 3.984 0 0 1 3.45-1.373 2.708 2.708 0 0 1 2.374 1.453 2.281 2.281 0 0 1-.59 2.535z", role: "presentation" })
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
