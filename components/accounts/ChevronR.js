(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ChevronR = function ChevronR() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-chevron-r" },
  React.createElement(
    "title",
    { id: "title" },
    "chevron-r icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M4.4 15.933a1.242 1.242 0 0 0 .881-.365L12.847 8 5.28.433a1.246 1.246 0 0 0-1.762 1.761L9.324 8l-5.806 5.806a1.246 1.246 0 0 0 .882 2.127z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ChevronR;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.ChevronR = ChevronR;
  }
})(this)
