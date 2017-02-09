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

  var CaretUpIcon = function CaretUpIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-caret-up" },
      React.createElement(
        "title",
        { id: "title" },
        "caret-up icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M15.865 12.028L8.328 2.74a.422.422 0 0 0-.655 0L.135 12.028a.422.422 0 0 0 .328.688h15.074a.422.422 0 0 0 .328-.688z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = CaretUpIcon;
  } else {
    global.CaretUpIcon = CaretUpIcon;
  }
})(undefined);