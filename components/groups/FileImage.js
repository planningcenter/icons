(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FileImage = function FileImage() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-file-image" },
  React.createElement(
    "title",
    { id: "title" },
    "file-image icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement(
      "g",
      { "data-name": "Layer 5" },
      React.createElement("path", { className: "cls-1", d: "M9.84 0H2.35a.8.8 0 0 0-.8.8v14.44a.8.8 0 0 0 .8.8h11.3a.8.8 0 0 0 .8-.8v-11zm2.57 4.2H10a.12.12 0 0 1-.12-.12V1.89zm.7 10.5H2.9V1.39h5.6v2.69A1.47 1.47 0 0 0 10 5.55h3.1z", role: "presentation" }),
      React.createElement("path", { className: "cls-1", d: "M4.2 12.68h7.68V6.73H4.2zm6.93-5.2v2.95l-.78-.91-1.16 1.36-2.3-2.69L5 10.45v-3zM5 11.6l1.89-2.26 2.22 2.59H5zm4.32.33l1.08-1.26.78.91v.35z", role: "presentation" }),
      React.createElement("circle", { className: "cls-1", cx: "9.2", cy: "8.75", r: ".43" })
    )
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FileImage;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.FileImage = FileImage;
  }
})(this)
