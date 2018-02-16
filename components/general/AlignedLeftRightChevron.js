(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var AlignedLeftRightChevron = function AlignedLeftRightChevron() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-aligned-left-right-chevron", role: "img", className: "symbol symbol-aligned-left-right-chevron" },
  React.createElement(
    "title",
    { id: "title-aligned-left-right-chevron" },
    "aligned-left-right-chevron icon"
  ),
  React.createElement("path", { d: "M15 12.615l-2.614-2.389v4.779L15 12.615z", role: "presentation" }),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M3 5.005h4m-4 9h4m-4-6h12m-12 3h7.5", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = AlignedLeftRightChevron;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.AlignedLeftRightChevron = AlignedLeftRightChevron;
  }
})(this)
