(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Label = function Label() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-label" },
  React.createElement(
    "title",
    { id: "title" },
    "label icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M10.341 6.694l-3.52 3.518a.829.829 0 0 0 0 1.171.83.83 0 0 0 1.172 0l3.52-3.519a.829.829 0 0 0-1.173-1.172zm-3.458 4.628zm4.817-6.89a1.022 1.022 0 1 0-.3-.722 1.014 1.014 0 0 0 .3.722zM4.74 9.3a.829.829 0 0 0 1.172 0l3.52-3.519A.829.829 0 0 0 8.26 4.614L4.741 8.132A.83.83 0 0 0 4.74 9.3zm.06-.058z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M16.092 7.107L16.059.814a.848.848 0 0 0-.824-.824l-6.3-.033A.825.825 0 0 0 8.349.2L.242 8.3a.83.83 0 0 0 0 1.171L6.571 15.8a.825.825 0 0 0 .586.243.834.834 0 0 0 .586-.242L15.85 7.7a.824.824 0 0 0 .242-.593zm-1.66-.338l-7.275 7.274L2 8.889l7.277-7.273 5.129.027zM.3 9.412z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Label;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.Label = Label;
  }
})(this)
