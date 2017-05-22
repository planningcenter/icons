(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Close = function Close() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-close" },
  React.createElement(
    "title",
    { id: "title" },
    "close icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M10.288 7.93l3.99-3.99a.358.358 0 0 0 0-.506l-1.754-1.755a.358.358 0 0 0-.506 0l-3.99 3.99-3.99-3.99a.358.358 0 0 0-.506 0L1.776 3.434a.358.358 0 0 0 0 .506l3.99 3.99-3.99 3.99a.358.358 0 0 0 0 .506l1.755 1.755a.358.358 0 0 0 .506 0l3.99-3.99 3.99 3.99a.358.358 0 0 0 .506 0l1.755-1.755a.358.358 0 0 0 0-.506z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Close;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Close = Close;
  }
})(this)
