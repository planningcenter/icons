(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var CheckEncircled = function CheckEncircled() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-check-encircled", role: "img", className: "symbol symbol-check-encircled" },
  React.createElement(
    "title",
    { id: "title-check-encircled" },
    "check-encircled icon"
  ),
  React.createElement("path", { d: "M8 .028a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm4.065 6.847L7.8 11.136a1.039 1.039 0 0 1-1.47 0l-2.4-2.4a1.039 1.039 0 0 1 1.47-1.47l1.668 1.665L10.6 5.405a1.039 1.039 0 0 1 1.47 1.47z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CheckEncircled;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.CheckEncircled = CheckEncircled;
  }
})(this)
