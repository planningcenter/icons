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

  var AppleIcon = function AppleIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-apple" },
      React.createElement(
        "title",
        { id: "title" },
        "apple icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M7.465 4.633a20.208 20.208 0 0 0-.578-3.086c-.2-.262-.513-.356-.513-.726a.591.591 0 0 1 1.131 0 14.765 14.765 0 0 1 .3 3.172S8.052 1.45 9.454.6A5.991 5.991 0 0 1 13.14.263s-.719 2.3-2.593 2.767a5.57 5.57 0 0 0-2.679 1.36l.024.254c1.349-.054 1.848-.98 3.82-.137a3.955 3.955 0 0 1 2.476 3.95c0 2.1-1.85 6.5-4.812 7.341-.395.112-1.109-.241-1.607-.241s-1.163.457-1.706.241c-2.717-1.083-4.713-5.36-4.713-7.341A4.468 4.468 0 0 1 3.824 4.4c1.586-.649 2.368.12 3.641.233z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = AppleIcon;
  } else {
    global.AppleIcon = AppleIcon;
  }
})(undefined);