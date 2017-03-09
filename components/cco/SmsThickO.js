(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var SmsThickO = function SmsThickO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-sms-thick-o" },
  React.createElement(
    "title",
    { id: "title" },
    "sms-thick-o icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M8,.09A7.94,7.94,0,0,0,.9,11.55L.1,14.73a1,1,0,0,0,1.2,1.2l3.18-.79A7.94,7.94,0,1,0,8,.09ZM8,14a6,6,0,0,1-2.91-.76,1,1,0,0,0-.72-.1l-1.94.48.49-1.94a1,1,0,0,0-.1-.73A5.95,5.95,0,1,1,8,14Z", style: "fill:#231f20", role: "presentation" }),
    React.createElement("circle", { cx: "5.41", cy: "8.11", r: "0.98", style: "fill:#231f20" }),
    React.createElement("circle", { cx: "8", cy: "8.11", r: "0.98", style: "fill:#231f20" }),
    React.createElement("circle", { cx: "10.59", cy: "8.11", r: "0.98", style: "fill:#231f20" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = SmsThickO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.SmsThickO = SmsThickO;
  }
})(this)
