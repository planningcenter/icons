(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var ImportProgressIcon = function ImportProgressIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-import-progress" },
  React.createElement(
    "title",
    { id: "title" },
    "import-progress icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M3.848 7.311a1.236 1.236 0 1 0 1.236 1.236 1.236 1.236 0 0 0-1.236-1.236zm4.396 0A1.236 1.236 0 1 0 9.48 8.547a1.236 1.236 0 0 0-1.236-1.236zm4.395 0a1.236 1.236 0 1 0 1.236 1.236 1.236 1.236 0 0 0-1.236-1.236z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ImportProgressIcon
  } else {
    global.ImportProgressIcon = ImportProgressIcon
  }
})(this)
