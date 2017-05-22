(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Chrome = function Chrome() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-chrome" },
  React.createElement(
    "title",
    { id: "title" },
    "chrome icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M14.8 4.9l-4.4.13a3.821 3.821 0 0 1 .684 5.232l-3.518 5.203c.144.008.288.013.434.013A7.48 7.48 0 0 0 14.8 4.9zM5.346 8.007a2.682 2.682 0 1 0 2.682-2.682 2.682 2.682 0 0 0-2.682 2.682zM8 11.823a3.818 3.818 0 0 1-3.246-1.8q-.078-.126-.147-.258L2.013 5.206l-.528-.878a7.48 7.48 0 0 0 5.14 11.022l2.5-3.7A3.823 3.823 0 0 1 8 11.823zm-.336-7.631c.11-.01.221-.015.334-.015h.183l6.176-.117A7.478 7.478 0 0 0 2 3.543l2.25 3.738a3.825 3.825 0 0 1 3.414-3.089z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Chrome;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Chrome = Chrome;
  }
})(this)
