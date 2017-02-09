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

  var ChainBrokenIcon = function ChainBrokenIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-chain-broken" },
      React.createElement(
        "title",
        { id: "title" },
        "chain-broken icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M5.986 10.073H2.358a.255.255 0 0 1-.258-.255V6.343a.255.255 0 0 1 .255-.255h3.631V4.123H2.358a2.22 2.22 0 0 0-2.22 2.22v3.475a2.22 2.22 0 0 0 2.22 2.22h3.628zm7.656-5.95H9.988v1.965h3.654a.255.255 0 0 1 .255.255v3.475a.255.255 0 0 1-.255.255H9.988v1.965h3.654a2.22 2.22 0 0 0 2.22-2.22V6.343a2.22 2.22 0 0 0-2.22-2.22z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M4.096 7.138h1.89v1.925h-1.89zm5.892 0h1.89v1.925h-1.89zM8.948 2.29v11.621H7.023V2.29z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = ChainBrokenIcon;
  } else {
    global.ChainBrokenIcon = ChainBrokenIcon;
  }
})(undefined);