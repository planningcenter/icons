(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ArrowRight = function ArrowRight() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-arrow-right" },
  React.createElement(
    "title",
    { id: "title" },
    "arrow-right icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M14.227 7.886l-4.184-4.143a.872.872 0 0 0-1.225 0 .851.851 0 0 0 0 1.212l2.706 2.68H2.359a.857.857 0 1 0 0 1.715h9.165l-2.706 2.68a.851.851 0 0 0 0 1.212.872.872 0 0 0 1.225 0L14.227 9.1a.851.851 0 0 0 0-1.214z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ArrowRight;
  } else {
    global.InterfacesIcon = global.InterfacesIcon || {};
    global.InterfacesIcon.ArrowRight = ArrowRight;
  }
})(this)
