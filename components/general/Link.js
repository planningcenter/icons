(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Link = function Link() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-link", role: "img", className: "symbol symbol-link" },
  React.createElement(
    "title",
    { id: "title-link" },
    "link icon"
  ),
  React.createElement("path", { d: "M7 13.005H5a4 4 0 0 1-4-4 4 4 0 0 1 4-4h2m4 0h2a4 4 0 0 1 4 4 4 4 0 0 1-4 4h-2m-6-4h8", fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Link;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.Link = Link;
  }
})(this)
