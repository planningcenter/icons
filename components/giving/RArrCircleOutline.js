(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var RArrCircleOutline = function RArrCircleOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-r-arr-circle-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "r-arr-circle-outline icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M7.09 4.879c-.065-.065-.326-.267-.543-.088-.16.166-.113.321-.048.386l2.786 2.789-2.854 2.854a.382.382 0 0 0 .015.424c.107.123.328.086.515-.1l3.1-3.057a.165.165 0 0 0 0-.233zm.943-4.74a7.827 7.827 0 1 0 7.826 7.827A7.836 7.836 0 0 0 8.033.139zm0 15.064a7.237 7.237 0 1 1 7.237-7.237A7.245 7.245 0 0 1 8.033 15.2z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = RArrCircleOutline;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.RArrCircleOutline = RArrCircleOutline;
  }
})(this)
