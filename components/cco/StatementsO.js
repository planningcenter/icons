(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var StatementsO = function StatementsO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-statements-o" },
  React.createElement(
    "title",
    { id: "title" },
    "statements-o icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M11,1V15H1V1H11m1-1H0V16H12V0Z", style: "fill:#010101", role: "presentation" }),
    React.createElement("path", { d: "M14,2V13H12V2h2m1-1H11V14h4V1Z", style: "fill:#010101", role: "presentation" }),
    React.createElement("rect", { x: "3", y: "3", width: "6", height: "1" }),
    React.createElement("rect", { x: "3", y: "5", width: "6", height: "1" }),
    React.createElement("rect", { x: "3", y: "7", width: "6", height: "1" }),
    React.createElement("rect", { x: "3", y: "9", width: "4", height: "1" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = StatementsO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.StatementsO = StatementsO;
  }
})(this)
