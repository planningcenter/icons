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

  var EnvelopeIcon = function EnvelopeIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-envelope" },
      React.createElement(
        "title",
        { id: "title" },
        "envelope icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M8.021 8.057l7.646-5.615a.963.963 0 0 0-.639-.245H1.015a.964.964 0 0 0-.639.245zm-3.262-.692L.042 3.901v6.928l4.717-3.464zm6.524-.001L16 10.829V3.9l-4.717 3.464zm-1.159.852L8.021 9.76l-2.1-1.544-5.879 4.315v.413a.973.973 0 0 0 .973.973h14.012a.973.973 0 0 0 .973-.973v-.413z", "data-name": "Your Icon", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = EnvelopeIcon;
  } else {
    global.EnvelopeIcon = EnvelopeIcon;
  }
})(undefined);