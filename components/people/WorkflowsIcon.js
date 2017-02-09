(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var WorkflowsIcon = function WorkflowsIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-workflows" },
  React.createElement(
    "title",
    { id: "title" },
    "workflows icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("rect", { "class": "cls-1", x: "7.505", y: "3.947", width: "8.406", height: "2.01", rx: ".658", ry: ".658" }),
    React.createElement("rect", { "class": "cls-1", x: "7.505", y: "10.534", width: "8.406", height: "2.01", rx: ".658", ry: ".658" }),
    React.createElement("path", { "class": "cls-1", d: "M1.93 6.927L.172 5.3a.474.474 0 0 1-.026-.67L.7 4.037a.474.474 0 0 1 .67-.026l.986.912 2.271-2.317A.474.474 0 0 1 5.3 2.6l.578.568a.474.474 0 0 1 .006.671L2.87 6.9a.675.675 0 0 1-.94.027zm0 6.46L.172 11.762a.474.474 0 0 1-.026-.67L.7 10.5a.474.474 0 0 1 .67-.026l.986.912 2.271-2.321a.474.474 0 0 1 .673-.006l.578.568a.474.474 0 0 1 .006.671L2.87 13.364a.675.675 0 0 1-.94.023z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = WorkflowsIcon
  } else {
    global.WorkflowsIcon = WorkflowsIcon
  }
})(this)
