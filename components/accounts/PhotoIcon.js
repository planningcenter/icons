(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var PhotoIcon = function PhotoIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-photo" },
  React.createElement(
    "title",
    { id: "title" },
    "photo icon"
  ),
  React.createElement("path", { d: "M14.72.61H1.28A1.31 1.31 0 0 0 0 1.91v12.18a1.31 1.31 0 0 0 1.31 1.3h13.41a1.31 1.31 0 0 0 1.28-1.3V1.91a1.31 1.31 0 0 0-1.28-1.3zM15 14.09a.3.3 0 0 1-.3.3H1.28a.3.3 0 0 1-.3-.3v-2.53L5 7.95l4 4a.48.48 0 0 0 .37.15.5.5 0 0 0 .36-.16l2.49-2.68L15 12zm0-3.49l-2.36-2.41a.52.52 0 0 0-.37-.19.5.5 0 0 0-.36.16l-2.5 2.68-4-4a.51.51 0 0 0-.69 0L1 10.21v-8.3a.3.3 0 0 1 .3-.3h13.42a.3.3 0 0 1 .3.3zM9.37 2.49a2.12 2.12 0 1 0 2.13 2.12 2.13 2.13 0 0 0-2.13-2.12zm0 3.24a1.12 1.12 0 1 1 1.12-1.12 1.12 1.12 0 0 1-1.12 1.12z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PhotoIcon
  } else {
    global.PhotoIcon = PhotoIcon
  }
})(this)
