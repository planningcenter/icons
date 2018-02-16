(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var DownCaret = function DownCaret() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-down-caret", role: "img", className: "symbol symbol-down-caret" },
  React.createElement(
    "title",
    { id: "title-down-caret" },
    "down-caret icon"
  ),
  React.createElement("path", { d: "M9.446 11.68l3.447-4.197H6l3.446 4.197z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = DownCaret;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.DownCaret = DownCaret;
  }
})(this)
