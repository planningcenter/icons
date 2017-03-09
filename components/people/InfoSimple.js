(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var InfoSimple = function InfoSimple() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-info-simple" },
  React.createElement(
    "title",
    { id: "title" },
    "info-simple icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M8 .1a7.912 7.912 0 1 0 7.91 7.914A7.92 7.92 0 0 0 8 .1zm0 13.7a5.782 5.782 0 1 1 5.78-5.781A5.787 5.787 0 0 1 8 13.8zm-1.065-2.023h2.13V7.516h-2.13zM8 4.085a1.148 1.148 0 1 0 1.148 1.148A1.148 1.148 0 0 0 8 4.085z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = InfoSimple;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.InfoSimple = InfoSimple;
  }
})(this)
