(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var CommentOutline = function CommentOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-comment-outline", role: "img", className: "symbol symbol-comment-outline" },
  React.createElement(
    "title",
    { id: "title-comment-outline" },
    "comment-outline icon"
  ),
  React.createElement("path", { d: "M1.015 15.992a1 1 0 0 1-.967-1.242l.8-3.2a7.972 7.972 0 1 1 3.608 3.613l-3.2.8a1 1 0 0 1-.241.029zM4.584 13.1a1 1 0 0 1 .488.128 6 6 0 1 0-2.294-2.3 1 1 0 0 1 .1.732l-.491 1.96 1.955-.488a1 1 0 0 1 .242-.032z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CommentOutline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.CommentOutline = CommentOutline;
  }
})(this)
