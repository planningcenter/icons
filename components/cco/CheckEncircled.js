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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-check-encircled" },
  React.createElement(
    "title",
    { id: "title" },
    "check-encircled icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm4.06,6.85L7.8,11.14a1,1,0,0,1-1.47,0l-2.4-2.4A1,1,0,0,1,5.41,7.27L7.07,8.93,10.59,5.4a1,1,0,1,1,1.47,1.47Z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CheckEncircled;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.CheckEncircled = CheckEncircled;
  }
})(this)
