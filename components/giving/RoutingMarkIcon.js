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

  var RoutingMarkIcon = function RoutingMarkIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-routing-mark" },
      React.createElement(
        "title",
        { id: "title" },
        "routing-mark icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M8.609 3v3h3V3zm0 10h3v-3h-3zm-4-2h2V5h-2z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = RoutingMarkIcon;
  } else {
    global.RoutingMarkIcon = RoutingMarkIcon;
  }
})(undefined);