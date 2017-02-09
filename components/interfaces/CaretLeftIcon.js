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

  var CaretLeftIcon = function CaretLeftIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-caret-left" },
      React.createElement(
        "title",
        { id: "title" },
        "caret-left icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M12.146 15.855L2.858 8.318a.422.422 0 0 1 0-.655L12.146.126a.422.422 0 0 1 .688.328v15.073a.422.422 0 0 1-.688.328z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = CaretLeftIcon;
  } else {
    global.CaretLeftIcon = CaretLeftIcon;
  }
})(undefined);