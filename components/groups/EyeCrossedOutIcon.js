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

  var EyeCrossedOutIcon = function EyeCrossedOutIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-eye-crossed-out" },
      React.createElement(
        "title",
        { id: "title" },
        "eye-crossed-out icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M15.82 7.86a9.675 9.675 0 0 0-1.44-2.35l-1.24 1.24a7.863 7.863 0 0 1 .91 1.44c-.51 1.02-2.33 4.05-5.95 4.05a3.022 3.022 0 0 1-.43-.02l-1.53 1.53a8.1 8.1 0 0 0 1.96.24c5.47 0 7.63-5.26 7.72-5.48a.91.91 0 0 0 0-.65z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M11.06 8.83l-2.42 2.42a3.158 3.158 0 0 0 2.42-2.42zm3.677-6.33A.876.876 0 0 0 13.5 1.263l-1.93 1.929A7.571 7.571 0 0 0 8.1 2.38C2.65 2.38.29 7.61.19 7.83a.878.878 0 0 0 0 .71 10.757 10.757 0 0 0 2.6 3.428l-1.555 1.558a.876.876 0 0 0 1.238 1.238zm-8.1 5.624a1.368 1.368 0 0 1 1.31-1.31zM1.97 8.19c.57-1.06 2.51-4.06 6.13-4.06a5.966 5.966 0 0 1 2.143.388l-.87.87A3.072 3.072 0 0 0 8 5.06a3.118 3.118 0 0 0-2.8 4.5l-1.16 1.162A9.014 9.014 0 0 1 1.97 8.19z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = EyeCrossedOutIcon;
  } else {
    global.EyeCrossedOutIcon = EyeCrossedOutIcon;
  }
})(undefined);