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

  var CheckIcon = function CheckIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-check" },
      React.createElement(
        "title",
        { id: "title" },
        "check icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M16.002 4.328l-2.675-2.675-7.339 7.339-3.429-3.429-2.603 2.602 6.103 6.102.002-.002.002.002 9.939-9.939z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = CheckIcon;
  } else {
    global.CheckIcon = CheckIcon;
  }
})(undefined);