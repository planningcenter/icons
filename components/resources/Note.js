(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Note = function Note() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-note" },
  React.createElement(
    "title",
    { id: "title" },
    "note icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M13.5 0h-11a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7.25l.75-.75L13.75 12l.75-.75V1a1 1 0 0 0-1-1zm-3 13.129v-.879a.25.25 0 0 1 .25-.25h.879zM13 10.5h-2.25A1.75 1.75 0 0 0 9 12.25v2.25H3v-13h10z", role: "presentation" }),
  React.createElement("rect", { className: "cls-1", x: "4.5", y: "3", width: "7", height: "1.5", rx: ".5", ry: ".5" }),
  React.createElement("rect", { className: "cls-1", x: "4.5", y: "6", width: "7", height: "1.5", rx: ".5", ry: ".5" }),
  React.createElement("rect", { className: "cls-1", x: "4.5", y: "9", width: "4", height: "1.5", rx: ".5", ry: ".5" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Note;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Note = Note;
  }
})(this)
