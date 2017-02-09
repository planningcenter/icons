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

  var ArrowDownIcon = function ArrowDownIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-arrow-down" },
      React.createElement(
        "title",
        { id: "title" },
        "arrow-down icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M8.666 14.3l4.143-4.185a.872.872 0 0 0 0-1.225.851.851 0 0 0-1.212 0L8.918 11.6V2.436a.857.857 0 1 0-1.715 0V11.6l-2.68-2.7a.851.851 0 0 0-1.212 0 .872.872 0 0 0 0 1.225L7.454 14.3a.851.851 0 0 0 1.212 0z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = ArrowDownIcon;
  } else {
    global.ArrowDownIcon = ArrowDownIcon;
  }
})(undefined);