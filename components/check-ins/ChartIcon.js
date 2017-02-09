(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var ChartIcon = function ChartIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-chart" },
  React.createElement(
    "title",
    { id: "title" },
    "chart icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M5.7.018a5.451 5.451 0 1 0 5.452 5.45A5.448 5.448 0 0 0 5.7.018zm0 9.525a4.074 4.074 0 0 1 0-8.148v4.082l3.314 2.362A4.069 4.069 0 0 1 5.7 9.543zm7.053 5.931a.506.506 0 0 0 .506.506h1.617a.507.507 0 0 0 .507-.507v-8.7a.506.506 0 0 0-.506-.506H13.26a.507.507 0 0 0-.507.507zm-3.914-3.901v3.9a.506.506 0 0 0 .506.506h1.617a.507.507 0 0 0 .507-.507v-3.9a.51.51 0 0 0-.508-.508H9.349a.51.51 0 0 0-.51.509zm-3.912 1.21v2.691a.506.506 0 0 0 .506.506h1.615a.507.507 0 0 0 .507-.507v-2.686a.512.512 0 0 0-.511-.511h-1.61a.507.507 0 0 0-.507.507z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ChartIcon
  } else {
    global.ChartIcon = ChartIcon
  }
})(this)
