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

  var AppCheckIcon = function AppCheckIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-app-check" },
      React.createElement(
        "title",
        { id: "title" },
        "app-check icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M5.992 13.5a1.616 1.616 0 0 1-1.137-.466L.971 9.188a1.58 1.58 0 0 1 0-2.25 1.619 1.619 0 0 1 2.273 0l2.748 2.72 6.764-6.7a1.619 1.619 0 0 1 2.273 0 1.579 1.579 0 0 1 0 2.25l-7.9 7.82a1.614 1.614 0 0 1-1.137.472z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = AppCheckIcon;
  } else {
    global.AppCheckIcon = AppCheckIcon;
  }
})(undefined);