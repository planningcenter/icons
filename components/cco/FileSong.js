(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FileSong = function FileSong() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-file-song", role: "img", className: "symbol symbol-file-song" },
  React.createElement(
    "title",
    { id: "title-file-song" },
    "file-song icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M9.891 0H2.4a.8.8 0 0 0-.8.8v14.4a.8.8 0 0 0 .8.8h11.3a.8.8 0 0 0 .8-.8V4.149zm2.564 4.155L10 4.162a.119.119 0 0 1-.118-.119V1.849zm.7 10.5H2.942V1.35h5.6v2.691a1.468 1.468 0 0 0 1.472 1.47L13.15 5.5z", role: "presentation" }),
    React.createElement("path", { d: "M10.617 7.212a.645.645 0 0 0-.644-.645l-2.954.722a.644.644 0 0 0-.488.626v2.653a1.282 1.282 0 0 0-.452-.091 1.3 1.3 0 1 0 1.3 1.3 1.135 1.135 0 0 0-.033-.162l.033.033V8.3l2.389-.6v2.06a1.283 1.283 0 0 0-.459-.093 1.3 1.3 0 1 0 1.3 1.3h.008zm-4.538 5.116a.551.551 0 1 1 .551-.551.551.551 0 0 1-.551.551zm3.23-.812a.551.551 0 1 1 .55-.551.551.551 0 0 1-.55.551z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FileSong;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.FileSong = FileSong;
  }
})(this)
