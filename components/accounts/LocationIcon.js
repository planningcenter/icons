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

  var LocationIcon = function LocationIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-location" },
      React.createElement(
        "title",
        { id: "title" },
        "location icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M13.209 3.462a5.616 5.616 0 0 0-3-3.021A5.5 5.5 0 0 0 8.01 0a5.563 5.563 0 0 0-2.2.441 5.633 5.633 0 0 0-3.02 3.021 5.58 5.58 0 0 0-.442 2.209A5 5 0 0 0 2.6 7.253a6.927 6.927 0 0 0 .656 1.435L7.07 15.33a1.107 1.107 0 0 0 .93.68 1.151 1.151 0 0 0 .95-.681l3.8-6.623a6.864 6.864 0 0 0 .656-1.437 5.153 5.153 0 0 0 .245-1.6 5.583 5.583 0 0 0-.442-2.207zM8 8.481a2.831 2.831 0 1 1 2.831-2.831A2.831 2.831 0 0 1 8 8.481z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = LocationIcon;
  } else {
    global.LocationIcon = LocationIcon;
  }
})(undefined);