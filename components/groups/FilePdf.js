(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FilePdf = function FilePdf() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-file-pdf" },
  React.createElement(
    "title",
    { id: "title" },
    "file-pdf icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement(
      "g",
      { "data-name": "Layer 5" },
      React.createElement("path", { className: "cls-1", d: "M9.845 0H2.35a.8.8 0 0 0-.8.8v14.4a.8.8 0 0 0 .8.8h11.3a.8.8 0 0 0 .8-.8V4.149zm2.564 4.155l-2.453.007a.118.118 0 0 1-.118-.118V1.85zm.7 10.5H2.9V1.349h5.6V4.04a1.468 1.468 0 0 0 1.46 1.471L13.1 5.5z", role: "presentation" }),
      React.createElement("path", { className: "cls-1", d: "M10.8 10.183a1.069 1.069 0 0 0-1.017-.459 4.028 4.028 0 0 0-.695.059 7.89 7.89 0 0 1-1.032-1.535C8.36 6.941 8.17 6.516 8 6.307a.758.758 0 0 0-.581-.275.975.975 0 0 0-.262.046.8.8 0 0 0-.519.487 2.4 2.4 0 0 0 .274 1.8 16.238 16.238 0 0 1-.842 2.365c-1 .474-1.5.943-1.563 1.473a.933.933 0 0 0 .409.872.71.71 0 0 0 .441.156 1.27 1.27 0 0 0 .967-.663 6.8 6.8 0 0 0 .565-.993 12.764 12.764 0 0 1 1.821-.595 1.784 1.784 0 0 0 1.144.526.983.983 0 0 0 .814-.435.8.8 0 0 0 .132-.888zm-.736.451a.213.213 0 0 1-.206.112.949.949 0 0 1-.506-.244c.169-.019.319-.037.431-.037a.678.678 0 0 1 .337.056c-.02.038-.02.079-.06.113zM5.243 12.3c.019-.131.225-.375.75-.675-.394.731-.6.825-.637.844-.113-.092-.113-.148-.113-.169zM7.4 7.616a1.241 1.241 0 0 1-.075-.75q.028-.056.056-.056H7.4a1.59 1.59 0 0 1 0 .806zm.131 1.275a9.718 9.718 0 0 0 .937 1.368 12.092 12.092 0 0 0-1.593.506 17.1 17.1 0 0 0 .654-1.874z", role: "presentation" })
    )
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FilePdf;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.FilePdf = FilePdf;
  }
})(this)
