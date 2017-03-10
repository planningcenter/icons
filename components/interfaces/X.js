(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var X = function X() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-x" },
  React.createElement(
    "title",
    { id: "title" },
    "x icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M13.985 11.491a.935.935 0 0 1 0 1.369l-1.031 1.05a.95.95 0 0 1-.7.3.921.921 0 0 1-.689-.3L8 10.335l-3.6 3.586a.935.935 0 0 1-1.369 0L2 12.892A.959.959 0 0 1 2 11.5l3.623-3.636-3.69-3.607a.957.957 0 0 1 0-1.388l1.031-1.031a.95.95 0 0 1 .7-.3.921.921 0 0 1 .689.3L8 5.487 11.582 1.9a.957.957 0 0 1 1.388 0L14 2.936a.958.958 0 0 1 .3.7.929.929 0 0 1-.3.689l-3.623 3.642 3.608 3.524z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = X;
  } else {
    global.InterfacesIcon = global.InterfacesIcon || {};
    global.InterfacesIcon.X = X;
  }
})(this)
