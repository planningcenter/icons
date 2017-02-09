(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var UndoIcon = function UndoIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-undo" },
  React.createElement(
    "title",
    { id: "title" },
    "undo icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M15.5 12.857a5.966 5.966 0 0 0-.072-.93l-.08-.533-.14-.562a9.381 9.381 0 0 0-.408-1.194 9.732 9.732 0 0 0-.64-1.206 10.669 10.669 0 0 0-.839-1.155 9.621 9.621 0 0 0-1.029-1.014 10.956 10.956 0 0 0-1.136-.846 10.158 10.158 0 0 0-1.183-.626L9.4 4.547l-.557-.179c-.185-.053-.341-.115-.53-.153l-.528-.107-.469-.086-.105-.013V1.716a.721.721 0 0 0-1.183-.549L.75 5.535a.712.712 0 0 0 0 1.1L6.025 11a.721.721 0 0 0 1.183-.549V8.24l.093.008.24.009a2.665 2.665 0 0 1 .308.044l.349.054.365.1c.259.051.51.169.789.255a7.392 7.392 0 0 1 .8.406 9.241 9.241 0 0 1 .79.521 7.517 7.517 0 0 1 .707.649 8.666 8.666 0 0 1 .621.717 8.81 8.81 0 0 1 .479.762l.205.372.154.367a4.9 4.9 0 0 1 .243.664l.093.286.056.248.11.48.028.122a.909.909 0 0 0 1.79-.122l.054-.611.025-.326c-.001-.123-.007-.251-.007-.388z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = UndoIcon
  } else {
    global.UndoIcon = UndoIcon
  }
})(this)
