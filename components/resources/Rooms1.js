(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Rooms1 = function Rooms1() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-rooms_1" },
  React.createElement(
    "title",
    { id: "title" },
    "rooms_1 icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M6.439 1.358H2.33a.949.949 0 0 0-.948.949v4.111a.949.949 0 0 0 .948.949h4.109a.949.949 0 0 0 .948-.949V2.307a.949.949 0 0 0-.948-.949zm0 7.236H2.33a.949.949 0 0 0-.948.949v4.151a.949.949 0 0 0 .948.949h4.109a.949.949 0 0 0 .948-.949V9.542a.949.949 0 0 0-.948-.948zm7.231 0H9.561a.949.949 0 0 0-.948.949v4.151a.949.949 0 0 0 .948.949h4.109a.949.949 0 0 0 .948-.949V9.542a.949.949 0 0 0-.948-.948zm0-7.236H9.561a.949.949 0 0 0-.948.949v4.111a.949.949 0 0 0 .948.949h4.109a.949.949 0 0 0 .948-.949V2.307a.949.949 0 0 0-.948-.949z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Rooms1;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Rooms1 = Rooms1;
  }
})(this)
