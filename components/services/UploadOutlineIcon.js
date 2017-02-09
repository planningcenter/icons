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

  var UploadOutlineIcon = function UploadOutlineIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-upload-outline" },
      React.createElement(
        "title",
        { id: "title" },
        "upload-outline icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement(
          "g",
          { "data-name": "New Symbol 37" },
          React.createElement("path", { d: "M9.557 3.53a2.813 2.813 0 0 1 2.734 3.525.75.75 0 0 0 .719.935 2.176 2.176 0 0 1 .336 4.322.753.753 0 0 0-.075.016c-.041.011-.07.015-.059.015H2.934a2.177 2.177 0 0 1-.354-4.322.75.75 0 0 0 .627-.695 2.168 2.168 0 0 1 2.919-1.91.75.75 0 0 0 .924-.359A2.818 2.818 0 0 1 9.557 3.53m0-.75a3.573 3.573 0 0 0-3.173 1.932 2.918 2.918 0 0 0-3.926 2.569 2.927 2.927 0 0 0 .477 5.819h10.281a1.141 1.141 0 0 0 .253-.041 2.926 2.926 0 0 0-.451-5.812A3.563 3.563 0 0 0 9.557 2.78z", role: "presentation" }),
          React.createElement("path", { d: "M6.98 10.888V9.132a.121.121 0 0 0-.121-.121h-1.18a.121.121 0 0 1-.091-.2l2.45-2.69a.123.123 0 0 1 .181 0l2.451 2.691a.121.121 0 0 1-.091.2h-1.2a.121.121 0 0 0-.121.121v1.756a.271.271 0 0 1-.271.271H7.251a.271.271 0 0 1-.271-.272z", role: "presentation" })
        )
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = UploadOutlineIcon;
  } else {
    global.UploadOutlineIcon = UploadOutlineIcon;
  }
})(undefined);