(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ArrowUp = function ArrowUp() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-arrow-up" },
  React.createElement(
    "title",
    { id: "title" },
    "arrow-up icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M7.577 1.824L3.434 6.008a.872.872 0 0 0 0 1.225.851.851 0 0 0 1.212 0l2.68-2.706v9.165a.857.857 0 1 0 1.715 0V4.527l2.68 2.706a.851.851 0 0 0 1.212 0 .872.872 0 0 0 0-1.225L8.79 1.824a.851.851 0 0 0-1.213 0z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ArrowUp;
  } else {
    global.InterfacesIcon = global.InterfacesIcon || {};
    global.InterfacesIcon.ArrowUp = ArrowUp;
  }
})(this)
