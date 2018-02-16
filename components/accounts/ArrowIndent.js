(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ArrowIndent = function ArrowIndent() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-arrow-indent", role: "img", className: "symbol symbol-arrow-indent" },
  React.createElement(
    "title",
    { id: "title-arrow-indent" },
    "arrow-indent icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1", "fill-rule": "evenodd" },
    React.createElement("path", { d: "M4.078 9.848v-8.16h-2.22v8.1a2.185 2.185 0 0 0 2.22 2.253h8.591v-2.2z", role: "presentation" }),
    React.createElement("path", { d: "M15.333 10.953l-1.569-1.57-2.814-2.809-1.57 1.569 2.812 2.812-2.812 2.812 1.57 1.569 2.814-2.809 1.569-1.569-.002-.003.002-.002z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ArrowIndent;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.ArrowIndent = ArrowIndent;
  }
})(this)
