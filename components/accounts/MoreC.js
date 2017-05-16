(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var MoreC = function MoreC() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-more-c" },
  React.createElement(
    "title",
    { id: "title" },
    "more-c icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M8 .111A7.889 7.889 0 1 0 15.889 8 7.9 7.9 0 0 0 8 .111zm0 14.564A6.675 6.675 0 1 1 14.675 8 6.683 6.683 0 0 1 8 14.675z", role: "presentation" }),
    React.createElement("circle", { className: "cls-1", cx: "4.359", cy: "8", r: "1.214" }),
    React.createElement("circle", { className: "cls-1", cx: "11.641", cy: "8", r: "1.214" }),
    React.createElement("circle", { className: "cls-1", cx: "8", cy: "8", r: "1.214" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = MoreC;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.MoreC = MoreC;
  }
})(this)
