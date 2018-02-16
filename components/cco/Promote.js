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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-promote", role: "img", className: "symbol symbol-promote" },
  React.createElement(
    "title",
    { id: "title-promote" },
    "promote icon"
  ),
  React.createElement("path", { d: "M12.4 9.948L10.322 6.1A3.41 3.41 0 1 0 5.4 5.8L3.173 9.991a2.9 2.9 0 1 0 1.555.175L6.569 6.7a3.216 3.216 0 0 0 2.411.165l1.893 3.509a2.906 2.906 0 1 0 1.527-.426zm-7.027 2.917a1.752 1.752 0 1 1-1.751-1.751 1.751 1.751 0 0 1 1.751 1.751zm7.005 1.763a1.764 1.764 0 1 1 1.764-1.763 1.763 1.763 0 0 1-1.764 1.763z", "fill-rule": "evenodd", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Promote;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Promote = Promote;
  }
})(this)
