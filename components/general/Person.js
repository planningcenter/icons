(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Person = function Person() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-person", role: "img", className: "symbol symbol-person" },
  React.createElement(
    "title",
    { id: "title-person" },
    "person icon"
  ),
  React.createElement("path", { d: "M9.3 10.463c-1.764 0-5.3.886-5.3 2.649v1.893h10.6v-1.893c0-1.763-3.537-2.649-5.3-2.649zm0-1.009a2.776 2.776 0 1 0-2.776-2.776A2.764 2.764 0 0 0 9.3 9.454z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Person;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.Person = Person;
  }
})(this)
