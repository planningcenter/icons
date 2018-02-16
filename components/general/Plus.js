(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Plus = function Plus() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-plus", role: "img", className: "symbol symbol-plus" },
  React.createElement(
    "title",
    { id: "title-plus" },
    "plus icon"
  ),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M2 9.005h14m-7 7v-14", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Plus;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.Plus = Plus;
  }
})(this)
