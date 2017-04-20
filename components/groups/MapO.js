(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var MapO = function MapO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-map-o" },
  React.createElement(
    "title",
    { id: "title" },
    "map-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M8 4.52a1.86 1.86 0 1 0 1.91 1.87A1.89 1.89 0 0 0 8 4.52zM8 .19a6.51 6.51 0 0 0-6.6 6.42 6.33 6.33 0 0 0 2.15 4.74l3.93 4.09a.74.74 0 0 0 1 0l4.43-4.59a6.3 6.3 0 0 0 1.69-4.24A6.51 6.51 0 0 0 8 .19zm3.71 9.52L8 13.55l-3.2-3.33a4.65 4.65 0 0 1-1.6-3.51A4.83 4.83 0 0 1 8 1.85a4.83 4.83 0 0 1 4.89 4.76 4.65 4.65 0 0 1-1.18 3.1z", "data-name": "Layer 21", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = MapO;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.MapO = MapO;
  }
})(this)
