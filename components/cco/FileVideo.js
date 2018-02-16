(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FileVideo = function FileVideo() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-file-video", role: "img", className: "symbol symbol-file-video" },
  React.createElement(
    "title",
    { id: "title-file-video" },
    "file-video icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M9.845 0H2.35a.8.8 0 0 0-.805.805V15.2a.805.805 0 0 0 .805.8h11.3a.805.805 0 0 0 .8-.8V4.15zm2.564 4.155l-2.452.007a.118.118 0 0 1-.118-.119V1.849zm.7 10.5H2.9V1.35h5.6l-.012 2.691A1.468 1.468 0 0 0 9.96 5.512l3.145-.012z", role: "presentation" }),
    React.createElement("path", { d: "M7.778 13.147a3.483 3.483 0 1 1 3.482-3.483 3.491 3.491 0 0 1-3.482 3.483zm0-6.18a2.7 2.7 0 1 0 2.7 2.7 2.689 2.689 0 0 0-2.7-2.7z", role: "presentation" }),
    React.createElement("path", { d: "M9.267 9.431L7.055 7.906a.284.284 0 0 0-.445.234v3.047a.284.284 0 0 0 .445.234L9.267 9.9a.283.283 0 0 0 0-.469zm-2.007 1.06V8.837l1.2.827z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FileVideo;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.FileVideo = FileVideo;
  }
})(this)
