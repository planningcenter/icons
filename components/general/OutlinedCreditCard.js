(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var OutlinedCreditCard = function OutlinedCreditCard() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-outlined-credit-card", role: "img", className: "symbol symbol-outlined-credit-card" },
  React.createElement(
    "title",
    { id: "title-outlined-credit-card" },
    "outlined-credit-card icon"
  ),
  React.createElement("path", { d: "M14.5 5.5v7h-11v-7h11M15 4H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z", role: "presentation" }),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M3 8h12", role: "presentation" }),
  React.createElement("path", { d: "M11.25 10h1.5v1.5h-1.5z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = OutlinedCreditCard;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.OutlinedCreditCard = OutlinedCreditCard;
  }
})(this)
