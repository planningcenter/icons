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

  var PulseSimpleIcon = function PulseSimpleIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-pulse-simple" },
      React.createElement(
        "title",
        { id: "title" },
        "pulse-simple icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M9.3 14.473h-.043a1.058 1.058 0 0 1-1.01-.848L6.215 4.107l-1.358 4a1.2 1.2 0 0 1-1.138.816H.733a.733.733 0 1 1 0-1.466h2.8l1.752-5.172A1.073 1.073 0 0 1 7.35 2.4l2 9.387L10.4 8.2a1.208 1.208 0 0 1 1.154-.866h3.716a.733.733 0 0 1 0 1.466h-3.52l-1.424 4.9a1.058 1.058 0 0 1-1.026.773z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = PulseSimpleIcon;
  } else {
    global.PulseSimpleIcon = PulseSimpleIcon;
  }
})(undefined);