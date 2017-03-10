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
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M8 1.146A6.854 6.854 0 1 1 1.146 8 6.861 6.861 0 0 1 8 1.146M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8z", role: "presentation" }),
    React.createElement("path", { d: "M7.977 13.433a1.169 1.169 0 0 1-1.122-1.085.192.192 0 0 1 0-.055.178.178 0 0 1 0-.058 1.126 1.126 0 0 1 2.249.058 1.158 1.158 0 0 1-1.127 1.14zm2.244-6.125c-.493.451-2.275 1.291-1.4 2.134a.184.184 0 0 1-.08.306l-1.2.405a.182.182 0 0 1-.178-.047 1.912 1.912 0 0 1-.523-1.244.176.176 0 0 1 0-.046.2.2 0 0 1 0-.049c.068-1.1.925-1.512 1.686-2.148.507-.422.756-1.281-.14-1.485a2.16 2.16 0 0 0-2.225.831.183.183 0 0 1-.259 0q-.457-.507-.916-1.013a.186.186 0 0 1 0-.259A3.984 3.984 0 0 1 8.437 3.32a2.711 2.711 0 0 1 2.374 1.453 2.283 2.283 0 0 1-.59 2.535z", role: "presentation" })
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