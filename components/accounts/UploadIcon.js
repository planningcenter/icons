(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var UploadIcon = function UploadIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-upload" },
  React.createElement(
    "title",
    { id: "title" },
    "upload icon"
  ),
  React.createElement(
    "g",
    { fill: "#010101", "data-name": "Layer 1" },
    React.createElement("path", { d: "M14.58 7.6h-2.11a1.22 1.22 0 0 0-1.12.72l-1 2.07H5.61l-1-2a1.23 1.23 0 0 0-1.08-.79H1.42A1.2 1.2 0 0 0 .23 8.8v5.1a1.89 1.89 0 0 0 1.88 1.9h11.78a1.89 1.89 0 0 0 1.88-1.9V8.8a1.2 1.2 0 0 0-1.19-1.2zm-.1 6.3a.6.6 0 0 1-.59.6H2.11a.6.6 0 0 1-.59-.6v-5h2l1 2a1.28 1.28 0 0 0 1.18.78h4.74a1.27 1.27 0 0 0 1.17-.76l.93-2h2z", role: "presentation" }),
    React.createElement("path", { d: "M4.45 5.14a.75.75 0 0 0 .55-.2L7.36 2.7V8a.75.75 0 0 0 1.51 0V2.7l2.38 2.22a.75.75 0 0 0 1-1.1L8.63.41a.73.73 0 0 0-.12-.07L8.39.27a.75.75 0 0 0-.26-.06.75.75 0 0 0-.28.06l-.14.07a.72.72 0 0 0-.11.07L3.93 3.83a.75.75 0 0 0 .52 1.3z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = UploadIcon
  } else {
    global.UploadIcon = UploadIcon
  }
})(this)
