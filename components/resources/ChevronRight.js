(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ChevronRight = function ChevronRight() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-chevron_right" },
  React.createElement(
    "title",
    { id: "title" },
    "chevron_right icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M5.847 15.933a1.242 1.242 0 0 0 .881-.365L14.3 8 6.728.433a1.246 1.246 0 0 0-1.762 1.761L10.772 8l-5.806 5.806a1.246 1.246 0 0 0 .881 2.127z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ChevronRight;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.ChevronRight = ChevronRight;
  }
})(this)
