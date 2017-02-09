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

  var EditorIcon = function EditorIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-editor" },
      React.createElement(
        "title",
        { id: "title" },
        "editor icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M14.107 4.435a1.434 1.434 0 0 0 0-2.029L12.372.671a1.435 1.435 0 0 0-2.029 0l-7 7-.016 3.713 3.816.014zm-9.624 5.8l.009-2.089 6.665-6.665a.285.285 0 0 1 .4 0l1.737 1.739a.284.284 0 0 1 0 .4L6.67 10.246zM.855 13.46h13.749v1.5H.855z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = EditorIcon;
  } else {
    global.EditorIcon = EditorIcon;
  }
})(undefined);