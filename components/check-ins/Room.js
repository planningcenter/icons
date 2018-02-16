(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Room = function Room() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-room", role: "img", className: "symbol symbol-room" },
  React.createElement(
    "title",
    { id: "title-room" },
    "room icon"
  ),
  React.createElement("path", { d: "M6.424 1.353H2.315a.949.949 0 0 0-.949.949v4.112a.948.948 0 0 0 .949.948h4.109a.947.947 0 0 0 .948-.948V2.3a.948.948 0 0 0-.948-.947zm0 7.236H2.315a.949.949 0 0 0-.949.949v4.151a.949.949 0 0 0 .949.949h4.109a.948.948 0 0 0 .948-.949V9.538a.948.948 0 0 0-.948-.949zm7.231 0H9.546a.948.948 0 0 0-.948.949v4.151a.948.948 0 0 0 .948.949h4.109a.949.949 0 0 0 .949-.949V9.538a.949.949 0 0 0-.949-.949zm0-7.236H9.546A.948.948 0 0 0 8.6 2.3v4.114a.947.947 0 0 0 .948.948h4.109a.948.948 0 0 0 .949-.948V2.3a.949.949 0 0 0-.951-.947z", "fill-rule": "evenodd", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Room;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Room = Room;
  }
})(this)
