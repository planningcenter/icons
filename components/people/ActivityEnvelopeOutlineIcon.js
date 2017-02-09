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

  var ActivityEnvelopeOutlineIcon = function ActivityEnvelopeOutlineIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-activity-envelope-outline" },
      React.createElement(
        "title",
        { id: "title" },
        "activity-envelope-outline icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M14.161 2.894H1.849A1.764 1.764 0 0 0 .087 4.656v7.166a1.763 1.763 0 0 0 1.762 1.762h12.312a1.763 1.763 0 0 0 1.762-1.762V4.656a1.764 1.764 0 0 0-1.762-1.762zm-9.3 5.364l-3.27 2.469V6.3zm1.394.834l.984.589a1.524 1.524 0 0 0 1.563 0l.984-.589 3.963 2.988H2.3zm4.925-.834l3.235-1.936V10.7zM1.849 4.4h12.312a.246.246 0 0 1 .229.189L8.014 8.39 1.627 4.568a.243.243 0 0 1 .222-.168z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = ActivityEnvelopeOutlineIcon;
  } else {
    global.ActivityEnvelopeOutlineIcon = ActivityEnvelopeOutlineIcon;
  }
})(undefined);