(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Safe = function Safe() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-safe", role: "img", className: "symbol symbol-safe" },
  React.createElement(
    "title",
    { id: "title-safe" },
    "safe icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M.368 2.237v11.557a1.932 1.932 0 0 0 1.926 1.926h11.557a1.932 1.932 0 0 0 1.927-1.926V2.237A1.932 1.932 0 0 0 13.851.31H2.294A1.932 1.932 0 0 0 .368 2.237zm1.284 0a.644.644 0 0 1 .642-.637h11.557a.644.644 0 0 1 .643.642v11.552a.644.644 0 0 1-.643.642H2.294a.644.644 0 0 1-.642-.642z", role: "presentation" }),
    React.createElement("path", { d: "M6.147 8.015a1.926 1.926 0 1 0 1.926-1.926 1.932 1.932 0 0 0-1.926 1.926zm1.284 0a.642.642 0 1 1 .642.642.644.644 0 0 1-.642-.642z", role: "presentation" }),
    React.createElement("path", { d: "M2.936 6.731V9.3a.643.643 0 0 0 0 1.285v1.284a1.288 1.288 0 0 0 1.284 1.283h7.705a1.287 1.287 0 0 0 1.284-1.284v-7.7a1.287 1.287 0 0 0-1.284-1.284H4.22a1.288 1.288 0 0 0-1.284 1.279v1.284a.642.642 0 0 0 0 1.284zm1.284 0a.642.642 0 1 0 0-1.284V4.163h7.705v7.705H4.22v-1.284a.643.643 0 0 0 0-1.285z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Safe;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Safe = Safe;
  }
})(this)
