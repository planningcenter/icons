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

  var HeartOutlineIcon = function HeartOutlineIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-heart-outline" },
      React.createElement(
        "title",
        { id: "title" },
        "heart-outline icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M8.023 15.024a1.575 1.575 0 0 1-1.133-.478L1.9 9.47A4.356 4.356 0 0 1 .662 6.227a4.284 4.284 0 0 1 1.53-3.111 4.282 4.282 0 0 1 5.78.383l.05.051a4.218 4.218 0 0 1 7.263 2.776 4.354 4.354 0 0 1-1.237 3.243l-4.892 4.977a1.577 1.577 0 0 1-1.133.478zM4.826 3.6a2.671 2.671 0 0 0-1.734.621 2.856 2.856 0 0 0-1.023 2.072 2.906 2.906 0 0 0 .826 2.165l4.99 5.076a.168.168 0 0 0 .275 0l4.894-4.977a2.905 2.905 0 0 0 .826-2.165 2.86 2.86 0 0 0-1.022-2.076 2.883 2.883 0 0 0-3.887.294l-.948.965-1.046-1.064A3.029 3.029 0 0 0 4.826 3.6z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = HeartOutlineIcon;
  } else {
    global.HeartOutlineIcon = HeartOutlineIcon;
  }
})(undefined);