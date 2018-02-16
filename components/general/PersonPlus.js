(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PersonPlus = function PersonPlus() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-person-plus", role: "img", className: "symbol symbol-person-plus" },
  React.createElement(
    "title",
    { id: "title-person-plus" },
    "person-plus icon"
  ),
  React.createElement("path", { d: "M7.7 10.463c-1.764 0-5.3.886-5.3 2.649v1.893H13v-1.893c0-1.763-3.535-2.649-5.3-2.649zm0-1.009a2.776 2.776 0 1 0-2.774-2.776A2.764 2.764 0 0 0 7.7 9.454z", role: "presentation" }),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M14.5 6.005v5m-2.5-2.5h5", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PersonPlus;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.PersonPlus = PersonPlus;
  }
})(this)
