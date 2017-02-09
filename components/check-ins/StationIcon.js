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

  var StationIcon = function StationIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-station" },
      React.createElement(
        "title",
        { id: "title" },
        "station icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M12.984.042H3.018A2.89 2.89 0 0 0 .054 2.918v10.054a2.963 2.963 0 0 0 2.964 2.964h9.966a2.963 2.963 0 0 0 2.964-2.964V2.918A2.89 2.89 0 0 0 12.984.042zM14.06 13.06a.987.987 0 0 1-.988.988H2.93a.988.988 0 0 1-.988-.988V2.918a.988.988 0 0 1 .988-.988h10.142a.988.988 0 0 1 .988.988zm-3.382-7.91L7.186 8.642l-1.4-1.4a.988.988 0 1 0-1.4 1.4l2.1 2.1a.988.988 0 0 0 1.4 0l4.191-4.191a.988.988 0 0 0-1.4-1.4z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = StationIcon;
  } else {
    global.StationIcon = StationIcon;
  }
})(undefined);