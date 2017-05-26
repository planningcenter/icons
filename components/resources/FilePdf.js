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
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-file-pdf" },
  React.createElement(
    "title",
    { id: "title" },
    "file-pdf icon"
  ),
  React.createElement("path", { "data-name": "path0 fill", className: "cls-1", d: "M9.858 0H2.31a.807.807 0 0 0-.81.8v14.4a.807.807 0 0 0 .81.8h11.38a.807.807 0 0 0 .81-.8V4.149zm2.582 4.155l-2.47.007a.119.119 0 0 1-.119-.118V1.85zm.7 10.5H2.859V1.35H8.5v2.691a1.453 1.453 0 0 0 .432 1.04 1.476 1.476 0 0 0 1.05.431l3.159-.012z", role: "presentation" }),
  React.createElement("path", { "data-name": "path1 fill", className: "cls-1", d: "M10.815 10.183a1.079 1.079 0 0 0-1.024-.458 4.085 4.085 0 0 0-.7.059 7.884 7.884 0 0 1-1.035-1.536c.306-1.307.116-1.732-.056-1.941a.766.766 0 0 0-.585-.275.988.988 0 0 0-.264.046.8.8 0 0 0-.523.487 2.382 2.382 0 0 0 .276 1.8 16.162 16.162 0 0 1-.848 2.364c-1.01.474-1.511.943-1.574 1.472a.93.93 0 0 0 .412.872.718.718 0 0 0 .444.156 1.279 1.279 0 0 0 .974-.663 6.79 6.79 0 0 0 .569-.993 12.915 12.915 0 0 1 1.835-.594 1.8 1.8 0 0 0 1.152.526.992.992 0 0 0 .82-.435.8.8 0 0 0 .127-.887zm-.741.451a.215.215 0 0 1-.208.112.959.959 0 0 1-.51-.244c.17-.019.321-.037.434-.037a.687.687 0 0 1 .34.056c-.018.038-.018.079-.056.113zM5.223 12.3c.019-.131.227-.375.755-.675-.4.731-.6.825-.642.844-.113-.092-.113-.148-.113-.169zm2.171-4.684a1.232 1.232 0 0 1-.076-.75q.028-.056.057-.056h.019a1.579 1.579 0 0 1 0 .806zm.132 1.274a9.711 9.711 0 0 0 .944 1.368 12.241 12.241 0 0 0-1.6.506 17.014 17.014 0 0 0 .656-1.873z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FilePdf;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.FilePdf = FilePdf;
  }
})(this)
