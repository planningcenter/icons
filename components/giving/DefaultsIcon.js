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

  var DefaultsIcon = function DefaultsIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-defaults" },
      React.createElement(
        "title",
        { id: "title" },
        "defaults icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M3.112 6.652a2.044 2.044 0 1 1 2.044-2.044 2.046 2.046 0 0 1-2.044 2.044zm0-3.588a1.544 1.544 0 1 0 1.544 1.544 1.545 1.545 0 0 0-1.544-1.544zm4.833 10.354a2.044 2.044 0 1 1 2.044-2.044 2.046 2.046 0 0 1-2.044 2.044zm0-3.588a1.544 1.544 0 1 0 1.544 1.544A1.545 1.545 0 0 0 7.945 9.83zm4.833-.278a2.044 2.044 0 1 1 2.044-2.044 2.046 2.046 0 0 1-2.044 2.044zm0-3.588a1.544 1.544 0 1 0 1.544 1.544 1.545 1.545 0 0 0-1.544-1.544z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M3.112 2.814a1.779 1.779 0 0 1 .75.169V1.25a.75.75 0 0 0-1.5 0v1.733a1.779 1.779 0 0 1 .75-.169zm0 3.586a1.779 1.779 0 0 1-.75-.169v8.491a.75.75 0 0 0 1.5 0V6.233a1.779 1.779 0 0 1-.75.167zm4.833 3.18a1.779 1.779 0 0 1 .75.169V1.25a.75.75 0 0 0-1.5 0v8.5a1.779 1.779 0 0 1 .75-.17zm0 3.588A1.779 1.779 0 0 1 7.2 13v1.724a.75.75 0 0 0 1.5 0V13a1.779 1.779 0 0 1-.755.168zm4.833-7.454a1.779 1.779 0 0 1 .75.169V1.25a.75.75 0 0 0-1.5 0v4.633a1.779 1.779 0 0 1 .75-.169zm0 3.586a1.779 1.779 0 0 1-.75-.169v5.591a.75.75 0 0 0 1.5 0V9.133a1.779 1.779 0 0 1-.75.167z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = DefaultsIcon;
  } else {
    global.DefaultsIcon = DefaultsIcon;
  }
})(undefined);