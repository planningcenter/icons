(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Note = function Note() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-note" },
  React.createElement(
    "title",
    { id: "title" },
    "note icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M3.253 7.738h7.053v1.056H3.253zm0-2.192h9.458v1.056H3.253zm0-2.095h9.458v1.056H3.253zm12.567 7.564a.828.828 0 0 1-.193.93l-3.8 3.66a.9.9 0 0 1-.626.25.873.873 0 0 1-.895-.855v-3.425a1.114 1.114 0 0 1 1.141-1.083h3.56a.878.878 0 0 1 .813.523zm-4.087 2.733l1.956-1.882", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M14.628.145H1.434a1.17 1.17 0 0 0-1.26 1.047v13.616a1.17 1.17 0 0 0 1.26 1.048H11.3l-.016-1.341H1.787V1.486h12.489v9.924h1.612V1.192a1.17 1.17 0 0 0-1.26-1.047z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Note;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.Note = Note;
  }
})(this)
