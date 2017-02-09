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

  var LinkArrowIcon = function LinkArrowIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-link-arrow" },
      React.createElement(
        "title",
        { id: "title" },
        "link-arrow icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M15.236 7.585L9.978 2.458a.918.918 0 0 0-1.275 0A.863.863 0 0 0 8.7 3.7l3.719 3.626H1.4a.879.879 0 1 0 0 1.758h11.021L8.7 12.711a.863.863 0 0 0 0 1.243.918.918 0 0 0 1.275 0l5.258-5.127a.864.864 0 0 0 .003-1.242z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = LinkArrowIcon;
  } else {
    global.LinkArrowIcon = LinkArrowIcon;
  }
})(undefined);