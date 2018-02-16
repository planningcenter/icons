(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var HorizontalBars = function HorizontalBars() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-horizontal-bars", role: "img", className: "symbol symbol-horizontal-bars" },
  React.createElement(
    "title",
    { id: "title-horizontal-bars" },
    "horizontal-bars icon"
  ),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M3 5.005h12m-12 4h12m-12 4h12", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = HorizontalBars;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.HorizontalBars = HorizontalBars;
  }
})(this)
