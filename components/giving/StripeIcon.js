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

  var StripeIcon = function StripeIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-stripe" },
      React.createElement(
        "title",
        { id: "title" },
        "stripe icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M15.333 8.1c0-1.039-.5-1.86-1.467-1.86a1.649 1.649 0 0 0-1.553 1.854 1.621 1.621 0 0 0 1.681 1.843 2.275 2.275 0 0 0 1.125-.263v-.818a2.143 2.143 0 0 1-1 .225c-.4 0-.744-.14-.789-.616h1.99c.004-.054.013-.265.013-.365zm-2.009-.384c0-.457.282-.649.536-.649s.513.192.513.649zM10.745 6.24a1.136 1.136 0 0 0-.795.318l-.05-.25H9v4.736l1.015-.216V9.68a1.138 1.138 0 0 0 .718.257c.726 0 1.39-.584 1.39-1.873.006-1.182-.665-1.824-1.378-1.824zm-.245 2.8a.606.606 0 0 1-.479-.193l-.003-1.507a.613.613 0 0 1 .485-.2c.371 0 .627.416.627.947-.001.545-.252.953-.63.953zM7.605 5.999l1.019-.217v-.826l-1.019.216v.827z", role: "presentation" }),
        React.createElement("path", { "class": "cls-2", d: "M7.605 6.308h1.019v3.557H7.605z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M6.514 6.608l-.064-.3h-.877v3.556h1.014V7.453a.721.721 0 0 1 .774-.213v-.932a.692.692 0 0 0-.847.3zM4.479 5.427l-.991.211v3.255a1.022 1.022 0 0 0 1.05 1.044A1.568 1.568 0 0 0 5.25 9.8v-.823c-.13.052-.77.238-.77-.36V7.173h.77v-.865h-.77zM1.732 7.34c0-.158.132-.22.345-.22a2.274 2.274 0 0 1 1.009.261v-.955a2.681 2.681 0 0 0-1.009-.186c-.823 0-1.372.43-1.372 1.148 0 1.123 1.543.941 1.543 1.425 0 .187-.163.248-.389.248a2.556 2.556 0 0 1-1.11-.324v.969a2.816 2.816 0 0 0 1.109.23c.844 0 1.425-.417 1.425-1.147 0-1.209-1.551-.989-1.551-1.449z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = StripeIcon;
  } else {
    global.StripeIcon = StripeIcon;
  }
})(undefined);