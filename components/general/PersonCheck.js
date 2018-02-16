(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PersonCheck = function PersonCheck() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-person-check", role: "img", className: "symbol symbol-person-check" },
  React.createElement(
    "title",
    { id: "title-person-check" },
    "person-check icon"
  ),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M12 7.872l1.875 1.875L17 6.622", role: "presentation" }),
  React.createElement("path", { d: "M6.7 10.463c-1.764 0-5.3.886-5.3 2.649v1.893H12v-1.893c0-1.763-3.535-2.649-5.3-2.649zm0-1.009a2.776 2.776 0 1 0-2.774-2.776A2.764 2.764 0 0 0 6.7 9.454z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PersonCheck;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.PersonCheck = PersonCheck;
  }
})(this)
