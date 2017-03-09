(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PageLeftDouble = function PageLeftDouble() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-page-left-double" },
  React.createElement(
    "title",
    { id: "title" },
    "page-left-double icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M6.363 1.637l2.703 2.702L5.404 8l3.662 3.661-2.703 2.702L0 8l6.363-6.363z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M13.298 1.637L16 4.339 12.339 8 16 11.661l-2.702 2.702L6.934 8l6.364-6.363z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PageLeftDouble;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.PageLeftDouble = PageLeftDouble;
  }
})(this)
