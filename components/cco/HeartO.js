(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var HeartO = function HeartO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-heart-o" },
  React.createElement(
    "title",
    { id: "title" },
    "heart-o icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M8,14.81a.71.71,0,0,1-.51-.21L1.36,8.41A4.27,4.27,0,0,1,.14,5.19,4.22,4.22,0,0,1,1.69,2.11a4,4,0,0,1,2.57-.9A4.6,4.6,0,0,1,7.5,2.57L8,3.09l.51-.52a4.36,4.36,0,0,1,5.81-.46,4.22,4.22,0,0,1,1.55,3.08,4.28,4.28,0,0,1-1.23,3.22h0L8.52,14.6A.71.71,0,0,1,8,14.81ZM4.26,2.21a3,3,0,0,0-1.94.67A3.24,3.24,0,0,0,1.13,5.24a3.27,3.27,0,0,0,.94,2.46l5.94,6,5.94-6a3.28,3.28,0,0,0,.94-2.46A3.24,3.24,0,0,0,13.7,2.88a3.36,3.36,0,0,0-4.47.4L8,4.51,6.79,3.28A3.59,3.59,0,0,0,4.26,2.21Z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = HeartO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.HeartO = HeartO;
  }
})(this)
