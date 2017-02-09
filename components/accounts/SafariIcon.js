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

  var SafariIcon = function SafariIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-safari" },
      React.createElement(
        "title",
        { id: "title" },
        "safari icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M7.971 2.019a5.906 5.906 0 1 1-5.906 5.906 5.912 5.912 0 0 1 5.906-5.906m0-1.974a7.88 7.88 0 1 0 7.88 7.88 7.878 7.878 0 0 0-7.88-7.88z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M11.177 11.131L9.389 6.508 4.765 4.719l1.789 4.606zM7.5 7.452a.652.652 0 0 1 .945 0 .667.667 0 0 1 0 .945.668.668 0 1 1-.945-.945z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = SafariIcon;
  } else {
    global.SafariIcon = SafariIcon;
  }
})(undefined);