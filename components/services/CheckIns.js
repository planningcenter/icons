(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var CheckIns = function CheckIns() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-check-ins" },
  React.createElement(
    "title",
    { id: "title" },
    "check-ins icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 14H2V2h3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h3z", role: "presentation" }),
    React.createElement("path", { className: "cls-2", d: "M12.008 5.682a1.038 1.038 0 0 0-1.466 0L6.875 9.341 5.408 7.877a1.036 1.036 0 0 0-1.467 1.464l2.2 2.2a1.038 1.038 0 0 0 1.467 0l4.4-4.391a1.033 1.033 0 0 0 0-1.468z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CheckIns;
  } else {
    global.ServicesIcon = global.ServicesIcon || {};
    global.ServicesIcon.CheckIns = CheckIns;
  }
})(this)
