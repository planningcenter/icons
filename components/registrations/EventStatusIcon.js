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

  var EventStatusIcon = function EventStatusIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-event-status" },
      React.createElement(
        "title",
        { id: "title" },
        "event-status icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M8.687 12.987h-.033a.7.7 0 0 1-.638-.5L5.938 5.564 4.445 9.226a.7.7 0 0 1-.649.436H.7a.7.7 0 1 1 0-1.4h2.625L5.389 3.2a.7.7 0 0 1 1.32.063l2.075 6.915 1.957-4.839a.7.7 0 0 1 .649-.438h.01a.7.7 0 0 1 .648.447l1.13 2.915H15.3a.7.7 0 1 1 0 1.4h-2.606a.7.7 0 0 1-.653-.447L11.377 7.5l-2.041 5.049a.7.7 0 0 1-.649.438z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = EventStatusIcon;
  } else {
    global.EventStatusIcon = EventStatusIcon;
  }
})(undefined);