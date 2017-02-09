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

  var RegistrationsIcon = function RegistrationsIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-registrations" },
      React.createElement(
        "title",
        { id: "title" },
        "registrations icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M7.884 4.072l-6.29 6.883a2.34 2.34 0 0 0-.5 1.076L.67 15.154a.147.147 0 0 0 .178.163l3.065-.677a2.281 2.281 0 0 0 1.018-.59L11.2 7.144a.24.24 0 0 0-.014-.337L8.224 4.058a.24.24 0 0 0-.34.014zm6.236-.5L11.136.868a.24.24 0 0 0-.336.016L8.9 2.963a.24.24 0 0 0 .014.337l2.962 2.746a.24.24 0 0 0 .34-.015l1.922-2.116a.24.24 0 0 0-.018-.338zM6.788 15.369h9a.211.211 0 0 0 .212-.212v-1.282a.211.211 0 0 0-.211-.211h-7.48a.324.324 0 0 0-.253.121z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = RegistrationsIcon;
  } else {
    global.RegistrationsIcon = RegistrationsIcon;
  }
})(undefined);