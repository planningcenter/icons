(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Ticket = function Ticket() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-ticket" },
  React.createElement(
    "title",
    { id: "title" },
    "ticket icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M13.983 4.7l-.222.045a2.131 2.131 0 0 1-2.519-2.519L11.287 2l-2-2-9.3 9.3 2 2 .222-.045a2.132 2.132 0 0 1 2.52 2.52L4.686 14l2 2 9.3-9.3zm-3.54 6.353L6.69 14.807 5.6 13.714a2.974 2.974 0 0 0-3.323-3.322L1.179 9.3l3.754-3.757.67.67.6-.6-.67-.67 3.751-3.75 1.094 1.094A2.973 2.973 0 0 0 13.7 5.609L14.794 6.7l-3.754 3.757-.67-.67-.6.6zM7.2 7.814l.968.968.6-.6-.968-.964z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Ticket;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Ticket = Ticket;
  }
})(this)