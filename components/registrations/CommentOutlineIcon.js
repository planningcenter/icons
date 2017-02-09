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

  var CommentOutlineIcon = function CommentOutlineIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-comment-outline" },
      React.createElement(
        "title",
        { id: "title" },
        "comment-outline icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M1.015 15.992a1 1 0 0 1-.967-1.242l.8-3.2a7.974 7.974 0 1 1 3.608 3.613l-3.2.8a1 1 0 0 1-.241.029zM4.584 13.1a1 1 0 0 1 .488.128 6 6 0 1 0-2.294-2.3 1 1 0 0 1 .1.731l-.491 1.961 1.955-.488a.992.992 0 0 1 .242-.032z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = CommentOutlineIcon;
  } else {
    global.CommentOutlineIcon = CommentOutlineIcon;
  }
})(undefined);