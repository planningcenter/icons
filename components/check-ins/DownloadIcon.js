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

  var DownloadIcon = function DownloadIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-download" },
      React.createElement(
        "title",
        { id: "title" },
        "download icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M13.6 7.44v4H2.4v-4H0v6.4h16v-6.4h-2.4z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M9.6 5.36v-3.2H6.4v3.2H3.52L8 9.989l4.48-4.629H9.6z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = DownloadIcon;
  } else {
    global.DownloadIcon = DownloadIcon;
  }
})(undefined);