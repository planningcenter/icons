(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PersonCog = function PersonCog() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-person-cog", role: "img", className: "symbol symbol-person-cog" },
  React.createElement(
    "title",
    { id: "title-person-cog" },
    "person-cog icon"
  ),
  React.createElement("path", { d: "M7.7 10.463c-1.764 0-5.3.886-5.3 2.649v1.893H13v-1.893c0-1.763-3.535-2.649-5.3-2.649zm0-1.009a2.776 2.776 0 1 0-2.774-2.776A2.764 2.764 0 0 0 7.7 9.454z", role: "presentation" }),
  React.createElement("circle", { cx: "15.002", cy: "8.101", r: "1.5", fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5" }),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M15.734 6.792l.731-1.309m-2.926 5.236l.731-1.309m.02-2.629l-.712-1.32m2.847 5.28l-.711-1.32m-2.211-1.274l-1.499.046M18 8.008l-1.499.047", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PersonCog;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.PersonCog = PersonCog;
  }
})(this)
