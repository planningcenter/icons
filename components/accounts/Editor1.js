(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Editor1 = function Editor1() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-editor_1" },
  React.createElement(
    "title",
    { id: "title" },
    "editor_1 icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M14.378 4.8a1.434 1.434 0 0 0 0-2.029l-1.735-1.735a1.435 1.435 0 0 0-2.029 0l-7 7-.014 3.713 3.816.014zm-9.624 5.8l.009-2.089 6.665-6.665a.285.285 0 0 1 .4 0l1.735 1.735a.284.284 0 0 1 0 .4l-6.622 6.63zm-3.628 3.224h13.749v1.5H1.126z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Editor1;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Editor1 = Editor1;
  }
})(this)
