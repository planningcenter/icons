(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var CreditCard = function CreditCard() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-credit-card", role: "img", className: "symbol symbol-credit-card" },
  React.createElement(
    "title",
    { id: "title-credit-card" },
    "credit-card icon"
  ),
  React.createElement("path", { d: "M16 7.25V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2.25zM2 8.75V13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.75z", role: "presentation" }),
  React.createElement("path", { fill: "#fff", d: "M12.25 10.5h1.5V12h-1.5z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CreditCard;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.CreditCard = CreditCard;
  }
})(this)
