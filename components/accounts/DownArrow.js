(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var DownArrow = function DownArrow() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-down-arrow" },
  React.createElement(
    "title",
    { id: "title" },
    "down-arrow icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M12.807 6.971l-4.1 5.245a.758.758 0 0 1-1.195 0L3.41 6.971a.758.758 0 0 1 .6-1.225h8.2a.758.758 0 0 1 .597 1.225z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = DownArrow;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.DownArrow = DownArrow;
  }
})(this)
