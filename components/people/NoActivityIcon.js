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

  var NoActivityIcon = function NoActivityIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-no-activity" },
      React.createElement(
        "title",
        { id: "title" },
        "no-activity icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M8.233 13.808H8.2a.651.651 0 0 1-.6-.483L5.583 5.664 4.148 9.448a.649.649 0 0 1-.607.42h-1.7a.65.65 0 0 1 0-1.3h1.251l1.994-5.262a.65.65 0 0 1 1.236.064l2.01 7.613 1.793-4.936a.652.652 0 0 1 .58-.428.681.681 0 0 1 .618.37l1.228 2.576h1.786a.65.65 0 1 1 0 1.3h-2.2a.651.651 0 0 1-.587-.371l-.736-1.546-1.969 5.431a.651.651 0 0 1-.612.429z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = NoActivityIcon;
  } else {
    global.NoActivityIcon = NoActivityIcon;
  }
})(undefined);