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

  var PageLeftIcon = function PageLeftIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-page-left" },
      React.createElement(
        "title",
        { id: "title" },
        "page-left icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M9.831 1.637l2.702 2.702L8.871 8l3.662 3.661-2.702 2.702L3.467 8l6.364-6.363z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = PageLeftIcon;
  } else {
    global.PageLeftIcon = PageLeftIcon;
  }
})(undefined);