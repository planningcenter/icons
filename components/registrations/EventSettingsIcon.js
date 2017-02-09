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

  var EventSettingsIcon = function EventSettingsIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-event-settings" },
      React.createElement(
        "title",
        { id: "title" },
        "event-settings icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M14.827 10.245l-.18-.694.48-.928-1.015-1.134-1.027.546-.667-.335-.273-.946-1.44-.008-.376 1.009-.653.282-.937-.491-1.066.738.461.984-.334.762-1.031.3.031 1.493.946.191s.471.909.379.92a5.121 5.121 0 0 0-.545.907l.883 1.072 1.173-.642.645.418.224 1.059 1.475.037.314-1 .628-.234 1.053.43.988-.867-.432-.973.233-.649 1.14-.39.066-1.5zm-3.2 2.993A2 2 0 1 1 13.466 11a2.047 2.047 0 0 1-1.836 2.238z", role: "presentation" }),
        React.createElement("path", { "class": "cls-2", d: "M13.429 2.789h-.643V1a.442.442 0 0 0-.442-.442H9.215A.442.442 0 0 0 8.773 1v1.789H5.085V1a.442.442 0 0 0-.442-.437H1.535A.442.442 0 0 0 1.094 1v1.789H.477a.442.442 0 0 0-.442.442v10.983a.442.442 0 0 0 .442.442h6.474l-.563-.684.295-.583c.035-.068.063-.12.1-.183H1.527V4.293h10.856v1.46h.516l.311 1.08.661-.351V3.23a.442.442 0 0 0-.442-.441zm-9.712.4H2.446v-1.56h1.271zm7.709 0h-1.3v-1.56h1.3z", role: "presentation" }),
        React.createElement("path", { "class": "cls-2", d: "M7.09 5.44a.129.129 0 0 0-.238 0L6 7.5a.129.129 0 0 1-.109.079l-2.221.178a.129.129 0 0 0-.074.226L5.285 9.43a.129.129 0 0 1 .042.128l-.517 2.167a.129.129 0 0 0 .193.14l.785-.48-.032-1.8 1.253-.371-.6-1.278 1.336-.924z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = EventSettingsIcon;
  } else {
    global.EventSettingsIcon = EventSettingsIcon;
  }
})(undefined);