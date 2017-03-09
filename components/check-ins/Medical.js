(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Medical = function Medical() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-medical" },
  React.createElement(
    "title",
    { id: "title" },
    "medical icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M7.988.059a7.952 7.952 0 1 0 7.952 7.953A7.952 7.952 0 0 0 7.988.059zm4.794 10.146h-2.6v2.6H5.795v-2.6h-2.6V5.818h2.6v-2.6h4.387v2.6h2.6z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Medical;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Medical = Medical;
  }
})(this)
