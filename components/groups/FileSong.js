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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-file-song" },
  React.createElement(
    "title",
    { id: "title" },
    "file-song icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement(
      "g",
      { "data-name": "Layer 5" },
      React.createElement("path", { className: "cls-1", d: "M9.84 0H2.35a.8.8 0 0 0-.8.8v14.44a.8.8 0 0 0 .8.8h11.3a.8.8 0 0 0 .8-.8v-11zm2.57 4.2H10a.12.12 0 0 1-.12-.12V1.89zm.7 10.5H2.9V1.39h5.6v2.69A1.47 1.47 0 0 0 10 5.55h3.1z", role: "presentation" }),
      React.createElement("path", { className: "cls-1", d: "M10.57 7.25a.65.65 0 0 0-.64-.65L7 7.33a.64.64 0 0 0-.52.67v2.65a1.28 1.28 0 0 0-.48-.13 1.3 1.3 0 1 0 1.3 1.3 1.22 1.22 0 0 0 0-.16V8.35l2.39-.61V9.8a1.28 1.28 0 0 0-.46-.09 1.3 1.3 0 1 0 1.3 1.3zM6 12.37a.55.55 0 1 1 .55-.55.55.55 0 0 1-.55.55zm3.23-.81a.55.55 0 1 1 .58-.56.55.55 0 0 1-.55.56z", role: "presentation" })
    )
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FileSong;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.FileSong = FileSong;
  }
})(this)
