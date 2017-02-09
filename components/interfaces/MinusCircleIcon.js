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

  var MinusCircleIcon = function MinusCircleIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-minus-circle" },
      React.createElement(
        "title",
        { id: "title" },
        "minus-circle icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M8.035 0A7.965 7.965 0 1 0 16 7.965 7.965 7.965 0 0 0 8.035 0zm4.607 8.727a.3.3 0 0 1-.1.234.335.335 0 0 1-.226.1H3.782a.291.291 0 0 1-.329-.329v-1.58a.29.29 0 0 1 .329-.327h8.53a.331.331 0 0 1 .226.094.3.3 0 0 1 .1.234z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = MinusCircleIcon;
  } else {
    global.MinusCircleIcon = MinusCircleIcon;
  }
})(undefined);