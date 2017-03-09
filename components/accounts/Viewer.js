(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Viewer = function Viewer() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-viewer" },
  React.createElement(
    "title",
    { id: "title" },
    "viewer icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M8 2.993C4.163 2.993.718 6.394.718 8S4.163 13.007 8 13.007 15.282 9.606 15.282 8 11.837 2.993 8 2.993zm0 8.42c-3.094 0-5.586-2.773-5.69-3.39.1-.665 2.6-3.438 5.69-3.438s5.586 2.773 5.69 3.39c-.104.666-2.596 3.439-5.69 3.439z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M8 5.724A2.276 2.276 0 1 0 10.276 8 2.278 2.278 0 0 0 8 5.724zm0 2.959A.683.683 0 1 1 8.683 8 .684.684 0 0 1 8 8.683z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Viewer;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Viewer = Viewer;
  }
})(this)
