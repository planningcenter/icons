(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ChevronL = function ChevronL() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-chevron-l", role: "img", className: "symbol symbol-chevron-l" },
  React.createElement(
    "title",
    { id: "title-chevron-l" },
    "chevron-l icon"
  ),
  React.createElement("path", { d: "M11.737 15.933a1.241 1.241 0 0 1-.881-.366L3.289 8 10.856.433a1.246 1.246 0 0 1 1.762 1.761L6.812 8l5.806 5.806a1.247 1.247 0 0 1-.881 2.127z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ChevronL;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.ChevronL = ChevronL;
  }
})(this)
