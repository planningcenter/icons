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

  var CirclePersonIcon = function CirclePersonIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-circle-person" },
      React.createElement(
        "title",
        { id: "title" },
        "circle-person icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M10.549 8.345L9.65 7.9a2.328 2.328 0 1 0-3.257 0l-.9.448a1.265 1.265 0 0 0-.7 1.138v1.446a1.206 1.206 0 0 0 1.2 1.2h4.055a1.206 1.206 0 0 0 1.2-1.2V9.484a1.265 1.265 0 0 0-.699-1.139zM8.021 5.277a.959.959 0 1 1-.959.959.96.96 0 0 1 .959-.959zm1.863 5.488H6.158V9.544l1.863-.928 1.863.928z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M8.021 0a8.021 8.021 0 1 0 8.021 8.021A8.03 8.03 0 0 0 8.021 0zm0 14.673a6.652 6.652 0 1 1 6.652-6.652 6.66 6.66 0 0 1-6.652 6.652z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = CirclePersonIcon;
  } else {
    global.CirclePersonIcon = CirclePersonIcon;
  }
})(undefined);