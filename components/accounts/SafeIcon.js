(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var SafeIcon = function SafeIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-safe" },
  React.createElement(
    "title",
    { id: "title" },
    "safe icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M.368 2.237v11.557a1.932 1.932 0 0 0 1.926 1.926h11.557a1.932 1.932 0 0 0 1.926-1.926V2.237A1.932 1.932 0 0 0 13.851.31H2.294A1.932 1.932 0 0 0 .368 2.237zm1.284 0a.644.644 0 0 1 .642-.642h11.557a.644.644 0 0 1 .642.642v11.557a.644.644 0 0 1-.642.642H2.294a.644.644 0 0 1-.642-.642z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M6.147 8.015a1.926 1.926 0 1 0 1.926-1.926 1.932 1.932 0 0 0-1.926 1.926zm1.284 0a.642.642 0 1 1 .642.642.644.644 0 0 1-.642-.642z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M2.936 6.731V9.3a.642.642 0 1 0 0 1.284v1.284a1.288 1.288 0 0 0 1.284 1.284h7.7a1.288 1.288 0 0 0 1.284-1.284v-7.7a1.288 1.288 0 0 0-1.284-1.284h-7.7a1.288 1.288 0 0 0-1.284 1.279v1.284a.642.642 0 0 0 0 1.284zm1.284 0a.642.642 0 0 0 0-1.284V4.163h7.7v7.7h-7.7v-1.279a.642.642 0 1 0 0-1.284z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = SafeIcon
  } else {
    global.SafeIcon = SafeIcon
  }
})(this)
