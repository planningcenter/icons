(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var DonorCardO = function DonorCardO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-donor-card-o" },
  React.createElement(
    "title",
    { id: "title" },
    "donor-card-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M7 8H2V3h5zM3 7h3V4H3zm5-4h6v1H8zm0 2h6v1.034H8zm0 2h4v1H8z", role: "presentation" }),
    React.createElement("path", { d: "M0 1v12h4v-1.5a.5.5 0 0 1 1 0V13h6v-1.5a.5.5 0 0 1 1 0V13h4V1zm15 11h-2v-.5a1.5 1.5 0 0 0-3 0v.5H6v-.5a1.5 1.5 0 0 0-3 0v.5H1V2h14z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = DonorCardO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.DonorCardO = DonorCardO;
  }
})(this)
