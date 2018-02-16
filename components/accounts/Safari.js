(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Safari = function Safari() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-safari", role: "img", className: "symbol symbol-safari" },
  React.createElement(
    "title",
    { id: "title-safari" },
    "safari icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M7.971 2.019a5.906 5.906 0 1 1-5.906 5.906 5.912 5.912 0 0 1 5.906-5.906m0-1.974a7.88 7.88 0 1 0 7.88 7.88 7.879 7.879 0 0 0-7.88-7.88z", role: "presentation" }),
    React.createElement("path", { d: "M11.177 11.131L9.389 6.508 4.765 4.719l1.789 4.606zM7.5 7.452a.654.654 0 0 1 .945 0 .667.667 0 0 1 0 .945.668.668 0 0 1-.945-.945z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Safari;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Safari = Safari;
  }
})(this)
