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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-more-c", role: "img", className: "symbol symbol-more-c" },
  React.createElement(
    "title",
    { id: "title-more-c" },
    "more-c icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M8 .111A7.889 7.889 0 1 0 15.889 8 7.9 7.9 0 0 0 8 .111zm0 14.564A6.675 6.675 0 1 1 14.675 8 6.682 6.682 0 0 1 8 14.675z", role: "presentation" }),
    React.createElement("path", { d: "M4.359 6.787A1.214 1.214 0 1 0 5.573 8a1.214 1.214 0 0 0-1.214-1.213zm7.282 0A1.214 1.214 0 1 0 12.855 8a1.214 1.214 0 0 0-1.214-1.213zM8 6.787A1.214 1.214 0 1 0 9.214 8 1.214 1.214 0 0 0 8 6.787z", role: "presentation" })
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
