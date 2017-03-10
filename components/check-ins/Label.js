(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Label = function Label() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-label" },
  React.createElement(
    "title",
    { id: "title" },
    "label icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M4.225 14.07h-.869v-1.737H1.619v-.869h2.606v2.606z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M1.457 13.618l2.027-2.028.614.615-2.027 2.027z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M14.36.75H1.619a.869.869 0 0 0-.869.869v6.66A2.319 2.319 0 0 0 3.067 10.6h2.027v2.317a2.319 2.319 0 0 0 2.316 2.311h6.95a.869.869 0 0 0 .869-.869V1.619A.869.869 0 0 0 14.36.75zm-.6 13.006H7.41a.846.846 0 0 1-.845-.844V9.124h-3.5a.845.845 0 0 1-.844-.845V2.222h11.535z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Label;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Label = Label;
  }
})(this)
