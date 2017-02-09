(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var ExternalLinkIcon = function ExternalLinkIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-external-link" },
  React.createElement(
    "title",
    { id: "title" },
    "external-link icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M14.637 9.902h-1.09v3.645H2.453V2.453h3.645V.075H.075v15.85h15.85V9.902h-1.288z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M8.634.075v.1l2.819 2.829-3.025 3.094h-2.33v3.804h3.804V7.968l3.292-3.223 2.631 2.621h.1V.075H8.634z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ExternalLinkIcon
  } else {
    global.ExternalLinkIcon = ExternalLinkIcon
  }
})(this)
