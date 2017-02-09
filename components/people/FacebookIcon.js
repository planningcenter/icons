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

  var FacebookIcon = function FacebookIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-facebook" },
      React.createElement(
        "title",
        { id: "title" },
        "facebook icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M11.919 0H9.5S5.716-.381 5.716 3.4v1.573H4.177l-.025 2.978h1.564v7.927H9.3V7.951h2.072l.5-2.979H9.3v-1.21s-.221-1.024 1.055-1.024h1.536z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = FacebookIcon;
  } else {
    global.FacebookIcon = FacebookIcon;
  }
})(undefined);