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

  var ExclamationCircleIcon = function ExclamationCircleIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-exclamation-circle" },
      React.createElement(
        "title",
        { id: "title" },
        "exclamation-circle icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M8.032-.009a7.977 7.977 0 1 0 7.977 7.977A7.977 7.977 0 0 0 8.032-.009zM9.6 12.137c.012.3-.151.448-.482.448H7a.529.529 0 0 1-.348-.121.4.4 0 0 1-.151-.328v-1.89a.43.43 0 0 1 .152-.346A.51.51 0 0 1 7 9.773h2.117a.464.464 0 0 1 .354.134.472.472 0 0 1 .128.341zm-.115-4.02a.419.419 0 0 1-.148.314.512.512 0 0 1-.348.134h-1.9a.5.5 0 0 1-.348-.134.419.419 0 0 1-.148-.314L6.418 3.8a.426.426 0 0 1 .133-.314.5.5 0 0 1 .363-.134H9.2a.5.5 0 0 1 .348.134.415.415 0 0 1 .152.314z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = ExclamationCircleIcon;
  } else {
    global.ExclamationCircleIcon = ExclamationCircleIcon;
  }
})(undefined);