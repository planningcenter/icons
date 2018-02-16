(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ExclaimationTriangle = function ExclaimationTriangle() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-exclaimation-triangle", role: "img", className: "symbol symbol-exclaimation-triangle" },
  React.createElement(
    "title",
    { id: "title-exclaimation-triangle" },
    "exclaimation-triangle icon"
  ),
  React.createElement("path", { d: "M7.874 2.489l-6.045 10.47a1.186 1.186 0 0 0 1.027 1.779h12.09a1.186 1.186 0 0 0 1.027-1.779L9.928 2.489a1.186 1.186 0 0 0-2.054 0z", role: "presentation" }),
  React.createElement("path", { fill: "#fff", d: "M7.901 11.005h2v2h-2zm0-5h2v4h-2z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ExclaimationTriangle;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.ExclaimationTriangle = ExclaimationTriangle;
  }
})(this)
