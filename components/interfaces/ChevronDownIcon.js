(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var ChevronDownIcon = function ChevronDownIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-chevron-down" },
  React.createElement(
    "title",
    { id: "title" },
    "chevron-down icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M15.929 4.464l-1.77-2.017-6.221 7.071-6.1-6.95L.071 4.586l7.867 8.967z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ChevronDownIcon
  } else {
    global.ChevronDownIcon = ChevronDownIcon
  }
})(this)
