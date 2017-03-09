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
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M7,8H2V3H7ZM3,7H6V4H3Z", role: "presentation" }),
    React.createElement("rect", { x: "8", y: "3", width: "6", height: "1" }),
    React.createElement("rect", { x: "8", y: "5", width: "6", height: "1.03" }),
    React.createElement("rect", { x: "8", y: "7", width: "4", height: "1" }),
    React.createElement("path", { d: "M0,1V13H4V11.5a.5.5,0,0,1,1,0V13h6V11.5a.5.5,0,0,1,1,0V13h4V1ZM15,12H13v-.5a1.5,1.5,0,0,0-3,0V12H6v-.5a1.5,1.5,0,0,0-3,0V12H1V2H15Z", role: "presentation" })
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
