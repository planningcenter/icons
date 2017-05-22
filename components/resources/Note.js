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
  React.createElement("path", { className: "cls-1", d: "M13.5 16.008H2.729a1.754 1.754 0 0 1-1.751-1.751V2.985a1.754 1.754 0 0 1 1.751-1.752H13.5a1.754 1.754 0 0 1 1.751 1.751v11.273a1.754 1.754 0 0 1-1.751 1.751zM2.729 2.968l-.017 11.289 10.79.017a.016.016 0 0 0 .017-.017V2.985z", role: "presentation" }),
  React.createElement("rect", { className: "cls-1", x: "3.718", y: "-.018", width: "1.582", height: "4.232", rx: ".783", ry: ".783" }),
  React.createElement("rect", { className: "cls-1", x: "7.251", y: "-.018", width: "1.582", height: "4.232", rx: ".783", ry: ".783" }),
  React.createElement("rect", { className: "cls-1", x: "10.783", y: "-.018", width: "1.582", height: "4.232", rx: ".783", ry: ".783" }),
  React.createElement("path", { className: "cls-1", d: "M4.18 5.71h7.968v1.522H4.18zm0 2.747h7.968v1.522H4.18zm0 2.747h5.041v1.522H4.18z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Note;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Note = Note;
  }
})(this)
