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
      React.createElement("path", { "class": "cls-1", d: "M13.587 8v4.181H2.4V8H0v6.689h15.984V8zM7.8 10.463a.257.257 0 0 0 .378 0l3.887-4.2a.257.257 0 0 0-.189-.432H9.591V2.742a.257.257 0 0 0-.257-.257H6.651a.257.257 0 0 0-.257.257v3.087H4.105a.257.257 0 0 0-.189.432z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = DownloadIcon;
  } else {
    global.DownloadIcon = DownloadIcon;
  }
})(undefined);