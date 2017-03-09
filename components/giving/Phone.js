(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Phone = function Phone() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-phone" },
  React.createElement(
    "title",
    { id: "title" },
    "phone icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M1.961 5.8a26.787 26.787 0 0 0 7.089 8.616l1.081.86a1.756 1.756 0 0 0 2.216-.023l1.892-1.57.308-.255a1.305 1.305 0 0 0 .173-1.832l-1.451-1.765a1.292 1.292 0 0 0-1.825-.174l-1.83 1.519a26.79 26.79 0 0 1-4.378-5.32l1.83-1.519A1.305 1.305 0 0 0 7.239 2.5L5.787.74A1.292 1.292 0 0 0 3.963.565l-.308.256-1.892 1.57a1.774 1.774 0 0 0-.44 2.182z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Phone;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.Phone = Phone;
  }
})(this)
