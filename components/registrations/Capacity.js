(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Capacity = function Capacity() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-capacity" },
  React.createElement(
    "title",
    { id: "title" },
    "capacity icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M8.731 7.813l-1.812-.825A3.05 3.05 0 1 0 3.645 7l-1.793.816a2.53 2.53 0 0 0-1.478 2.3v2.434A1.826 1.826 0 0 0 2.2 14.368h6.185a1.826 1.826 0 0 0 1.824-1.824V10.11a2.53 2.53 0 0 0-1.478-2.297zM5.275 2.781a1.648 1.648 0 1 1-1.648 1.648 1.649 1.649 0 0 1 1.648-1.648zm3.533 9.762a.423.423 0 0 1-.423.423H2.2a.423.423 0 0 1-.423-.423V10.11a1.125 1.125 0 0 1 .657-1.022l2.858-1.3 2.858 1.3a1.125 1.125 0 0 1 .658 1.022z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M14.383 6.665l-1.114-.507a2.478 2.478 0 1 0-3.136.008l-.249.113a.7.7 0 0 0 .581 1.275l1.244-.566 2.091.952a.681.681 0 0 1 .4.619V10.4a.15.15 0 0 1-.15.15h-2.144a.7.7 0 0 0 0 1.4h2.144a1.553 1.553 0 0 0 1.55-1.55V8.559a2.086 2.086 0 0 0-1.217-1.894zM11.7 3.182a1.077 1.077 0 1 1-1.08 1.077 1.078 1.078 0 0 1 1.08-1.077z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Capacity;
  } else {
    global.RegistrationsIcon = global.RegistrationsIcon || {};
    global.RegistrationsIcon.Capacity = Capacity;
  }
})(this)
