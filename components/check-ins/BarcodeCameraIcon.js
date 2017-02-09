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

  var BarcodeCameraIcon = function BarcodeCameraIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-barcode-camera" },
      React.createElement(
        "title",
        { id: "title" },
        "barcode-camera icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M14.661 2.968H12.2a.95.95 0 0 0-.947-.947h-6.5a.95.95 0 0 0-.947.947H1.333A1.337 1.337 0 0 0 0 4.3v8.1a1.337 1.337 0 0 0 1.333 1.333h13.328a1.337 1.337 0 0 0 1.333-1.333V4.3a1.337 1.337 0 0 0-1.333-1.332zM7.994 12.2a4.2 4.2 0 1 1 4.2-4.2 4.2 4.2 0 0 1-4.2 4.2z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M7.994 4.3a3.7 3.7 0 1 0 3.7 3.7 3.7 3.7 0 0 0-3.7-3.7zm0 6.9a3.2 3.2 0 1 1 3.2-3.2 3.2 3.2 0 0 1-3.2 3.2z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M5.735 6.258h.651v3.484h-.651zm.971 0h.326v3.484h-.326zm.645 0h.651v3.484h-.651zm2.263 0h.651v3.484h-.651zm-1.291 0h.326v3.484h-.326zm.645 0h.326v3.484h-.326z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = BarcodeCameraIcon;
  } else {
    global.BarcodeCameraIcon = BarcodeCameraIcon;
  }
})(undefined);