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

  var Applications2Icon = function Applications2Icon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-applications_2" },
      React.createElement(
        "title",
        { id: "title" },
        "applications_2 icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M6.647 6.841H9.21V9.4H6.647zm-5.125 0h2.563V9.4H1.522zm10.25 0h2.562V9.4h-2.562zm0 5.125h2.562v2.562h-2.562zm-5.125 0H9.21v2.562H6.647zm-5.125 0h2.563v2.562H1.522zm0-10.25h2.563v2.562H1.522zm5.125 0H9.21v2.562H6.647zm5.125 0h2.562v2.562h-2.562z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = Applications2Icon;
  } else {
    global.Applications2Icon = Applications2Icon;
  }
})(undefined);