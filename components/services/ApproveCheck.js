(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ApproveCheck = function ApproveCheck() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-approve-check" },
  React.createElement(
    "title",
    { id: "title" },
    "approve-check icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M15.816 4.6l-1.9-1.9a.429.429 0 0 0-.606 0L6.286 9.729l-3.6-3.6a.429.429 0 0 0-.606 0l-1.9 1.9a.429.429 0 0 0 0 .606l3.6 3.6 2.5 2.5 2.5-2.5L15.816 5.2a.429.429 0 0 0 0-.6z", "data-name": "New Symbol 37", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ApproveCheck;
  } else {
    global.ServicesIcon = global.ServicesIcon || {};
    global.ServicesIcon.ApproveCheck = ApproveCheck;
  }
})(this)
