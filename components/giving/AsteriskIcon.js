(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var AsteriskIcon = function AsteriskIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-asterisk" },
  React.createElement(
    "title",
    { id: "title" },
    "asterisk icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M13.944 13.746l-2.708 1.882-3.212-4.866c-.044.032-.014 0-.046.046L4.7 15.627l-2.639-1.9.069-.069 3.53-4.594v-.023L.015 7.5l1.01-3.14 5.553 2L6.3.482h3.33l-.252 5.874 5.576-1.974.987 3.118L10.3 9.064z", "data-name": "Rectangle 1", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = AsteriskIcon
  } else {
    global.AsteriskIcon = AsteriskIcon
  }
})(this)
