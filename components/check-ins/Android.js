(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Android = function Android() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-android" },
  React.createElement(
    "title",
    { id: "title" },
    "android icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M10.52 2.34a.52.52 0 0 0-1 0 .52.52 0 0 0 1 0zm-3.86 0a.52.52 0 0 0-1 0 .52.52 0 0 0 1 0zm4.77-.71a3.63 3.63 0 0 1 1.08 2.5h-9a3.62 3.62 0 0 1 1.04-2.48L3.72.21A.14.14 0 1 1 4 .07l.8 1.38A4.78 4.78 0 0 1 7.5.28h1a4.78 4.78 0 0 1 2.72 1.15L12 .07a.14.14 0 0 1 .24.14zm2.72 3.5a1 1 0 0 1 1 1v4.29a1 1 0 1 1-2 0V6.13a1 1 0 0 1 1-1zm-12.3 0a1 1 0 0 1 1 1v4.29a1 1 0 1 1-2 0V6.13a1 1 0 0 1 1-1zm7.4 7.3H6.74V15a1 1 0 0 1-2 0v-2.57a1.25 1.25 0 0 1-1.24-1.26V4.56h9.08v6.61a1.25 1.25 0 0 1-1.24 1.26V15a1 1 0 0 1-2 0z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Android;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Android = Android;
  }
})(this)
