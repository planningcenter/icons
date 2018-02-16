(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var RightCaret = function RightCaret() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-right-caret", role: "img", className: "symbol symbol-right-caret" },
  React.createElement(
    "title",
    { id: "title-right-caret" },
    "right-caret icon"
  ),
  React.createElement("path", { d: "M11.197 9.581L7 6.135v6.892l4.197-3.446z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = RightCaret;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.RightCaret = RightCaret;
  }
})(this)
