(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var DropCaret = function DropCaret() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-drop-caret" },
  React.createElement(
    "title",
    { id: "title" },
    "drop-caret icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M14.25 1.292H1.75A1.75 1.75 0 0 0 0 3.042v9.917a1.75 1.75 0 0 0 1.75 1.75h12.5A1.75 1.75 0 0 0 16 12.958V3.042a1.75 1.75 0 0 0-1.75-1.75zm-1.9 5.421l-3.941 3.951a.6.6 0 0 1-.409.163.618.618 0 0 1-.405-.162L3.646 6.713a.521.521 0 0 1-.125-.619.53.53 0 0 1 .53-.347h7.912a.564.564 0 0 1 .39.965z", "data-name": "New Symbol 37", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = DropCaret;
  } else {
    global.ServicesIcon = global.ServicesIcon || {};
    global.ServicesIcon.DropCaret = DropCaret;
  }
})(this)
