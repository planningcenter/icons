(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var FilterIcon = function FilterIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-filter" },
  React.createElement(
    "title",
    { id: "title" },
    "filter icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M15.182 1.284H.814a.468.468 0 0 0-.32.81l5.748 6.185V14.4a.342.342 0 0 0 .512.283l2.67-2.259a.7.7 0 0 0 .365-.639V8.282l5.711-6.2a.461.461 0 0 0-.318-.798z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FilterIcon
  } else {
    global.FilterIcon = FilterIcon
  }
})(this)
