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

  var ChevronRightIcon = function ChevronRightIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-chevron-right" },
      React.createElement(
        "title",
        { id: "title" },
        "chevron-right icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M13.553 7.933L4.586.066l-2.018 1.77 6.95 6.1-7.072 6.219 2.017 1.77z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = ChevronRightIcon;
  } else {
    global.ChevronRightIcon = ChevronRightIcon;
  }
})(undefined);