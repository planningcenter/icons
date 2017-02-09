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

  var ChevronUpIcon = function ChevronUpIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-chevron-up" },
      React.createElement(
        "title",
        { id: "title" },
        "chevron-up icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M7.938 2.446L.071 11.414l1.77 2.018 6.1-6.95 6.222 7.072 1.77-2.017z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = ChevronUpIcon;
  } else {
    global.ChevronUpIcon = ChevronUpIcon;
  }
})(undefined);