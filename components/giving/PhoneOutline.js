(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PhoneOutline = function PhoneOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-phone-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "phone-outline icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M12.563.006H3.437a.99.99 0 0 0-.981 1v13.99a.99.99 0 0 0 .981 1h9.125a.99.99 0 0 0 .981-1V1.005a.99.99 0 0 0-.98-.999zM3.706 14.744V1.256h8.588v13.488zm4.4-3.172A1.031 1.031 0 1 0 9.16 12.6a1.045 1.045 0 0 0-1.06-1.028z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PhoneOutline;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.PhoneOutline = PhoneOutline;
  }
})(this)
