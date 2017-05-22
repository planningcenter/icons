(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Octagon = function Octagon() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-octagon" },
  React.createElement(
    "title",
    { id: "title" },
    "octagon icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M4.694 15.938L.031 11.275V4.681L4.694.018h6.594l4.663 4.663v6.594l-4.663 4.663H4.694z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Octagon;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Octagon = Octagon;
  }
})(this)
