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

  var ViewIcon = function ViewIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-view" },
      React.createElement(
        "title",
        { id: "title" },
        "view icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M15.993 7.861c-.505-.9-3.5-5.569-7.984-5.569S.563 6.963.067 7.862a.285.285 0 0 0 0 .276c.5.9 3.453 5.571 7.943 5.571s7.478-4.667 7.984-5.569a.285.285 0 0 0-.001-.279zM8.07 12.036A4.04 4.04 0 1 1 12.11 8a4.04 4.04 0 0 1-4.04 4.036z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M8.236 5.986c0 .051.007.1.007.155a1.834 1.834 0 0 1-2.189 1.8v.056a2.018 2.018 0 1 0 2.182-2.011z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = ViewIcon;
  } else {
    global.ViewIcon = ViewIcon;
  }
})(undefined);