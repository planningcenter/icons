(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ReducedHorizontalBars = function ReducedHorizontalBars() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-reduced-horizontal-bars", role: "img", className: "symbol symbol-reduced-horizontal-bars" },
  React.createElement(
    "title",
    { id: "title-reduced-horizontal-bars" },
    "reduced-horizontal-bars icon"
  ),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M3 5.005h12m-10 4h8m-5.5 4h3", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ReducedHorizontalBars;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.ReducedHorizontalBars = ReducedHorizontalBars;
  }
})(this)
