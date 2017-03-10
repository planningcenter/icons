(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PencilUnderline = function PencilUnderline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-pencil-underline" },
  React.createElement(
    "title",
    { id: "title" },
    "pencil-underline icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M15.16 14.369H5.063l7.488-10.316a.842.842 0 0 0-.172-1.162L9.418.663a.793.793 0 0 0-.607-.156.811.811 0 0 0-.537.328l-7.54 10.39-.013 3.466a.823.823 0 0 0 .324.658.782.782 0 0 0 .288.129.534.534 0 0 0 .151.031H15.16a.57.57 0 0 0 0-1.14zM1.852 11.6L9 1.762l2.476 1.863-7.149 9.841-2.486.787z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PencilUnderline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.PencilUnderline = PencilUnderline;
  }
})(this)
