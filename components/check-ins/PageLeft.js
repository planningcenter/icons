(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PageLeft = function PageLeft() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-page-left" },
  React.createElement(
    "title",
    { id: "title" },
    "page-left icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M9.831 1.637l2.702 2.702L8.871 8l3.662 3.661-2.702 2.702L3.467 8l6.364-6.363z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PageLeft;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.PageLeft = PageLeft;
  }
})(this)
