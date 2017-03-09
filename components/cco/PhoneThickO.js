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
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M13,0H3A1,1,0,0,0,2,1V15a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V1A1,1,0,0,0,13,0ZM12,14H4V2h8Z", style: "fill:#231f20", role: "presentation" }),
    React.createElement("circle", { cx: "8", cy: "11.89", r: "0.99", style: "fill:#231f20" })
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
