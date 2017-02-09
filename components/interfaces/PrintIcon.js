(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var PrintIcon = function PrintIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-print" },
  React.createElement(
    "title",
    { id: "title" },
    "print icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M15.92 13.206l-.02-6.184a1.532 1.532 0 0 0-1.53-1.527h-1.382V4.009l-3.671-3H2.89v4.486h-1.4A1.532 1.532 0 0 0-.037 7.031l.018 6.174H2.89v2.334h10.1v-2.333zM3.955 2.053h4.674v2.541H12v2.8H3.955V2.053zM12 14.447H3.955v-2.728H12v2.728z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PrintIcon
  } else {
    global.PrintIcon = PrintIcon
  }
})(this)
