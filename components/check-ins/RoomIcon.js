"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global) {
  "use strict";

  var React = void 0;

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var RoomIcon = function RoomIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-room" },
      React.createElement(
        "title",
        { id: "title" },
        "room icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M6.424 1.353H2.315a.949.949 0 0 0-.948.949v4.112a.949.949 0 0 0 .948.949h4.109a.949.949 0 0 0 .948-.949V2.3a.949.949 0 0 0-.948-.947zm0 7.236H2.315a.949.949 0 0 0-.948.949v4.151a.949.949 0 0 0 .948.949h4.109a.949.949 0 0 0 .948-.949V9.538a.949.949 0 0 0-.948-.949zm7.231 0H9.546a.949.949 0 0 0-.948.949v4.151a.949.949 0 0 0 .948.949h4.109a.949.949 0 0 0 .948-.949V9.538a.949.949 0 0 0-.948-.949zm0-7.236H9.546A.949.949 0 0 0 8.6 2.3v4.114a.949.949 0 0 0 .948.949h4.109a.949.949 0 0 0 .948-.949V2.3a.949.949 0 0 0-.95-.947z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = RoomIcon;
  } else {
    global.RoomIcon = RoomIcon;
  }
})(undefined);