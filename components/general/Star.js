(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Star = function Star() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-star", role: "img", className: "symbol symbol-star" },
  React.createElement(
    "title",
    { id: "title-star" },
    "star icon"
  ),
  React.createElement("path", { d: "M9 2.205l2.163 4.378L16 7.285l-3.5 3.408.826 4.812L9 13.233l-4.326 2.272.826-4.812L2 7.285l4.837-.702L9 2.205z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Star;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.Star = Star;
  }
})(this)
