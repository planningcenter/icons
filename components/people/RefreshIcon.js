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

  var RefreshIcon = function RefreshIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-refresh" },
      React.createElement(
        "title",
        { id: "title" },
        "refresh icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M12.585 3.876l-1.438 1.439a4.317 4.317 0 0 0-7.37 3.053h1.677l-2.679 2.679L.1 8.369h1.642a6.352 6.352 0 0 1 10.843-4.493zm3.43 4.271l-2.676-2.678-2.678 2.678h1.677a4.317 4.317 0 0 1-7.37 3.053l-1.439 1.44a6.352 6.352 0 0 0 10.844-4.493h1.642z", "data-name": "Your Icon", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = RefreshIcon;
  } else {
    global.RefreshIcon = RefreshIcon;
  }
})(undefined);