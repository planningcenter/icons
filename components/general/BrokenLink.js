(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var BrokenLink = function BrokenLink() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-broken-link", role: "img", className: "symbol symbol-broken-link" },
  React.createElement(
    "title",
    { id: "title-broken-link" },
    "broken-link icon"
  ),
  React.createElement("path", { d: "M6 13.005H5a4 4 0 0 1-4-4 4 4 0 0 1 4-4h1m6 0h1a4 4 0 0 1 4 4 4 4 0 0 1-4 4h-1m-8-4h3m4 0h3m-5-6v12", fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = BrokenLink;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.BrokenLink = BrokenLink;
  }
})(this)
