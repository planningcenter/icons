"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global) {
  "use strict";

  var React = void 0;

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var CreditCardIcon = function CreditCardIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-credit-card" },
      React.createElement(
        "title",
        { id: "title" },
        "credit-card icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M0 11.992a.892.892 0 0 0 .892.893h14.2a.893.893 0 0 0 .892-.893V6.29H0zm11.541-3.571H14.3v2.759h-2.759zM15.09 1.8H.892A.892.892 0 0 0 0 2.692v1.333h15.982V2.692a.893.893 0 0 0-.892-.892z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = CreditCardIcon;
  } else {
    global.CreditCardIcon = CreditCardIcon;
  }
})(undefined);