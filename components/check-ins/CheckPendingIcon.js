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

  var CheckPendingIcon = function CheckPendingIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-check-pending" },
      React.createElement(
        "title",
        { id: "title" },
        "check-pending icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M11.63 6.194a5.387 5.387 0 0 1 2.086.419L16 4.328l-2.675-2.675-7.339 7.339-3.429-3.429-2.6 2.6 6.1 6.1.568-.568a5.417 5.417 0 0 1 5-7.505z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M11.63 7.276a4.337 4.337 0 1 0 4.337 4.337 4.337 4.337 0 0 0-4.337-4.337zm1.412 6.7a.593.593 0 0 1-.838-.015L10.789 12.5V9.673a.592.592 0 1 1 1.185 0v2.348l1.083 1.122a.592.592 0 0 1-.015.837z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = CheckPendingIcon;
  } else {
    global.CheckPendingIcon = CheckPendingIcon;
  }
})(undefined);