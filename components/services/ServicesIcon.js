(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var ServicesIcon = function ServicesIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-services" },
  React.createElement(
    "title",
    { id: "title" },
    "services icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 14H2V2h3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h3z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M4.745 4.518h6.525a.59.59 0 0 1 .59.59v.615a.59.59 0 0 1-.59.59H4.745a.589.589 0 0 1-.589-.589v-.617a.589.589 0 0 1 .589-.589zm.002 2.836h6.523a.59.59 0 0 1 .59.59v.615a.59.59 0 0 1-.59.59H4.745a.589.589 0 0 1-.589-.589v-.616a.591.591 0 0 1 .591-.59zm-.002 2.836h6.523a.591.591 0 0 1 .591.591v.614a.59.59 0 0 1-.59.59H4.745a.589.589 0 0 1-.589-.589v-.617a.589.589 0 0 1 .589-.589z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ServicesIcon
  } else {
    global.ServicesIcon = ServicesIcon
  }
})(this)
