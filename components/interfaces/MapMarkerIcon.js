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

  var MapMarkerIcon = function MapMarkerIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-map-marker" },
      React.createElement(
        "title",
        { id: "title" },
        "map-marker icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M8 .007a5.547 5.547 0 0 0-5.547 5.547v.2a5.535 5.535 0 0 0 .322 1.666c.93 3.057 3.625 6.845 4.737 8.328a.609.609 0 0 0 .976 0c1.111-1.482 3.806-5.27 4.736-8.327a5.523 5.523 0 0 0 .318-1.666q0-.1.005-.2A5.547 5.547 0 0 0 8 .007zm0 8.264a2.717 2.717 0 1 1 2.717-2.717A2.717 2.717 0 0 1 8 8.271z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = MapMarkerIcon;
  } else {
    global.MapMarkerIcon = MapMarkerIcon;
  }
})(undefined);