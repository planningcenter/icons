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

  var SuccessIcon = function SuccessIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-success" },
      React.createElement(
        "title",
        { id: "title" },
        "success icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M8 0a7.992 7.992 0 1 0 7.992 7.992A7.992 7.992 0 0 0 8 0zm3.734 7.287l-2.892 2.891-.989.989a.7.7 0 0 1-.989 0l-.989-.989L4.55 8.852a1.038 1.038 0 0 1 0-1.468l.015-.015a1.038 1.038 0 0 1 1.468 0l1.326 1.326L10.251 5.8a1.038 1.038 0 0 1 1.468 0l.015.015a1.038 1.038 0 0 1 0 1.472z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = SuccessIcon;
  } else {
    global.SuccessIcon = SuccessIcon;
  }
})(undefined);