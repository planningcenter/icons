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
  React.createElement("path", { className: "cls-1", d: "M13.5 0h-11a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6.75l.75-.75 3.75-3.75.75-.75V1a1 1 0 0 0-1-1zM10 13.129V11.75a.25.25 0 0 1 .25-.25h1.379zM13 10h-2.75a1.75 1.75 0 0 0-1.75 1.75v2.75H3v-13h10z", role: "presentation" }),
  React.createElement("rect", { className: "cls-1", x: "4.5", y: "3", width: "7", height: "1.5", rx: ".5", ry: ".5" }),
  React.createElement("rect", { className: "cls-1", x: "4.5", y: "6", width: "7", height: "1.5", rx: ".5", ry: ".5" }),
  React.createElement("rect", { className: "cls-1", x: "4.5", y: "9", width: "3", height: "1.5", rx: ".5", ry: ".5" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Note;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Note = Note;
  }
})(this)
