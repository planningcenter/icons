(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var InfoIcon = function InfoIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-info" },
  React.createElement(
    "title",
    { id: "title" },
    "info icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M10.054 11.5l-.772.332a.572.572 0 0 1-.751-.613l.822-4.288a.709.709 0 0 0-.7-.8H6.182c-.362 0-.469.192-.469.32s.181.245.746.394.362.511.341.7-.437 2.461-.511 2.919-.575 2.365 1.438 2.45a3.265 3.265 0 0 0 2.478-1 .242.242 0 0 0-.151-.414zM8.5 5.623a1.369 1.369 0 1 0-1.369-1.369A1.369 1.369 0 0 0 8.5 5.623zM8 .137A7.863 7.863 0 1 0 15.863 8 7.863 7.863 0 0 0 8 .137zm0 14.528A6.665 6.665 0 1 1 14.665 8 6.673 6.673 0 0 1 8 14.665z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = InfoIcon
  } else {
    global.InfoIcon = InfoIcon
  }
})(this)
