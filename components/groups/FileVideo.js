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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-file-video" },
  React.createElement(
    "title",
    { id: "title" },
    "file-video icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement(
      "g",
      { "data-name": "Layer 5" },
      React.createElement("path", { className: "cls-1", d: "M9.84 0H2.35a.8.8 0 0 0-.8.8v14.4a.8.8 0 0 0 .8.8h11.3a.8.8 0 0 0 .8-.8v-11zm2.56 4.16H10A.12.12 0 0 1 9.84 4V1.85zm.7 10.5H2.9V1.35h5.6V4A1.47 1.47 0 0 0 10 5.51h3.1z", role: "presentation" }),
      React.createElement("path", { className: "cls-1", d: "M7.78 13.15a3.48 3.48 0 1 1 3.48-3.48 3.49 3.49 0 0 1-3.48 3.48zm0-6.15a2.7 2.7 0 1 0 2.7 2.7A2.69 2.69 0 0 0 7.78 7z", role: "presentation" }),
      React.createElement("path", { className: "cls-1", d: "M9.27 9.43L7.05 7.91a.28.28 0 0 0-.44.23v3a.28.28 0 0 0 .44.23L9.27 9.9a.28.28 0 0 0 0-.47zm-2 1.06V8.84l1.2.83z", role: "presentation" })
    )
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FileVideo;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.FileVideo = FileVideo;
  }
})(this)
