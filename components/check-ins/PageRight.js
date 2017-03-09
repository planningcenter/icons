(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PageRight = function PageRight() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-page-right" },
  React.createElement(
    "title",
    { id: "title" },
    "page-right icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M6.169 1.637L3.467 4.339 7.129 8l-3.662 3.661 2.702 2.702L12.533 8 6.169 1.637z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PageRight;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.PageRight = PageRight;
  }
})(this)
