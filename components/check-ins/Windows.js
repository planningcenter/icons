(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Windows = function Windows() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-windows", role: "img", className: "symbol symbol-windows" },
  React.createElement(
    "title",
    { id: "title-windows" },
    "windows icon"
  ),
  React.createElement("path", { d: "M.025 2.265l6.518-.887v6.287L.031 7.7zM6.54 8.39v6.293l-6.515-.9V8.347zm.79-7.129L15.973 0v7.585l-8.643.069zm8.645 7.188V16L7.33 14.78l-.012-6.345z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Windows;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Windows = Windows;
  }
})(this)
