(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PageRightDouble = function PageRightDouble() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-page-right-double" },
  React.createElement(
    "title",
    { id: "title" },
    "page-right-double icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M9.637 1.637L6.934 4.339 10.596 8l-3.662 3.661 2.703 2.702L16 8 9.637 1.637z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M2.702 1.637L0 4.339 3.661 8 0 11.661l2.702 2.702L9.066 8 2.702 1.637z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PageRightDouble;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.PageRightDouble = PageRightDouble;
  }
})(this)
