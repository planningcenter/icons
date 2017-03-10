(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PhoneThickO = function PhoneThickO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-phone-thick-o" },
  React.createElement(
    "title",
    { id: "title" },
    "phone-thick-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M13.007.009H2.993a1 1 0 0 0-1 1v13.982a1 1 0 0 0 1 1h10.014a1 1 0 0 0 1-1V1.009a1 1 0 0 0-1-1zm-1 13.982H3.993V2.009h8.015z", role: "presentation" }),
    React.createElement("circle", { className: "cls-1", cx: "8", cy: "11.894", r: ".989" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PhoneThickO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.PhoneThickO = PhoneThickO;
  }
})(this)
