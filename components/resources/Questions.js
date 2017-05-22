(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Questions = function Questions() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-questions" },
  React.createElement(
    "title",
    { id: "title" },
    "questions icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M7.984.092A7.819 7.819 0 1 0 15.8 7.911 7.819 7.819 0 0 0 7.984.092zm0 13.706a5.887 5.887 0 1 1 5.887-5.887A5.887 5.887 0 0 1 7.986 13.8z", role: "presentation" }),
  React.createElement("path", { className: "cls-1", d: "M8.622 10.834h-1.66a.318.318 0 0 0-.3.3v1.579a.3.3 0 0 0 .093.217.274.274 0 0 0 .211.1h1.66a.264.264 0 0 0 .208-.1.311.311 0 0 0 .087-.217v-1.575a.308.308 0 0 0-.083-.211.267.267 0 0 0-.216-.093zm1.61-7.008a3.52 3.52 0 0 0-1.049-.537A3.8 3.8 0 0 0 8.025 3.1a3.678 3.678 0 0 0-1.148.167 5.265 5.265 0 0 0-.865.359 2.714 2.714 0 0 0-.537.359c-.122.111-.19.173-.2.188a.3.3 0 0 0-.031.395L6.2 5.733a.279.279 0 0 0 .2.12.474.474 0 0 0 .233-.06l.1-.081a1.867 1.867 0 0 1 .276-.178 2.409 2.409 0 0 1 .4-.167 1.5 1.5 0 0 1 .471-.07 1.1 1.1 0 0 1 .7.227.714.714 0 0 1 .289.582.945.945 0 0 1-.248.652A7.668 7.668 0 0 1 8 7.372q-.232.183-.471.409A3.179 3.179 0 0 0 7.1 8.3a2.783 2.783 0 0 0-.32.642 1.646 1.646 0 0 0-.122.66v.359a.314.314 0 0 0 .3.3h1.66a.271.271 0 0 0 .208-.091.293.293 0 0 0 .087-.211v-.365c0-.264.085-.2.258-.384s.382-.39.632-.613a5.172 5.172 0 0 0 .5-.464 5.006 5.006 0 0 0 .464-.578 2.756 2.756 0 0 0 .349-.7 2.844 2.844 0 0 0 .132-.917 2.63 2.63 0 0 0-.279-1.226 2.58 2.58 0 0 0-.737-.886z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Questions;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Questions = Questions;
  }
})(this)
