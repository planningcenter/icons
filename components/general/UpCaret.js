(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var UpCaret = function UpCaret() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-up-caret", role: "img", className: "symbol symbol-up-caret" },
  React.createElement(
    "title",
    { id: "title-up-caret" },
    "up-caret icon"
  ),
  React.createElement("path", { d: "M9.554 7.483L6.107 11.68H13L9.554 7.483z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = UpCaret;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.UpCaret = UpCaret;
  }
})(this)
