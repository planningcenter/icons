(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var UpChevron = function UpChevron() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-up-chevron", role: "img", className: "symbol symbol-up-chevron" },
  React.createElement(
    "title",
    { id: "title-up-chevron" },
    "up-chevron icon"
  ),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M3.686 12.657L9.343 7 15 12.657", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = UpChevron;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.UpChevron = UpChevron;
  }
})(this)
