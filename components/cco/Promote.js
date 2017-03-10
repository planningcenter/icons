(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Promote = function Promote() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-promote" },
  React.createElement(
    "title",
    { id: "title" },
    "promote icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M12.4 9.948L10.322 6.1A3.412 3.412 0 1 0 5.4 5.8L3.173 9.991a2.9 2.9 0 1 0 1.555.175L6.569 6.7a3.214 3.214 0 0 0 2.411.164l1.892 3.509a2.906 2.906 0 1 0 1.528-.425zm-7.027 2.917a1.751 1.751 0 1 1-1.751-1.751 1.751 1.751 0 0 1 1.751 1.751zm7.005 1.763a1.764 1.764 0 1 1 1.763-1.763 1.763 1.763 0 0 1-1.763 1.763z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Promote;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Promote = Promote;
  }
})(this)
