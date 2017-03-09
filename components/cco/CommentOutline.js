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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-comment-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "comment-outline icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M1,16a1,1,0,0,1-1-1.24l.8-3.2a8,8,0,1,1,3.61,3.61l-3.2.8A1,1,0,0,1,1,16ZM4.58,13.1a1,1,0,0,1,.49.13,6,6,0,1,0-2.29-2.3,1,1,0,0,1,.1.73l-.49,2,2-.49A1,1,0,0,1,4.58,13.1Z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CommentOutline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.CommentOutline = CommentOutline;
  }
})(this)
