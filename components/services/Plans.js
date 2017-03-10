(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Plans = function Plans() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-plans" },
  React.createElement(
    "title",
    { id: "title" },
    "plans icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M13.681.9h-1.107v-.922L3.366-.044V.9h-1a1.77 1.77 0 0 0-1.77 1.77v11.837c0 .977.793 1.488 1.77 1.488h11.315c.978 0 1.77-.511 1.77-1.488V2.671A1.77 1.77 0 0 0 13.681.9zm-1.509.291l-1.494 1.615H5.2L3.762 1.191zm1.4 12.921H2.457V3.718h11.116zm-1.465-2.822h-8.3v.954h8.3zm0-5.715h-8.3v.953h8.3zm0 2.88h-8.3v.951h8.3z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Plans;
  } else {
    global.ServicesIcon = global.ServicesIcon || {};
    global.ServicesIcon.Plans = Plans;
  }
})(this)
