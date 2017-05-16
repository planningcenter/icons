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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-map-o" },
  React.createElement(
    "title",
    { id: "title" },
    "map-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M8 4.524a1.864 1.864 0 1 0 1.913 1.863A1.889 1.889 0 0 0 8 4.524zM8 .192a6.511 6.511 0 0 0-6.6 6.423 6.325 6.325 0 0 0 2.154 4.738l3.926 4.088a.744.744 0 0 0 1.033 0l4.431-4.594A6.3 6.3 0 0 0 14.6 6.615 6.511 6.511 0 0 0 8 .192zm3.707 9.522L8 13.552l-3.2-3.333-.046-.048-.049-.044a4.654 4.654 0 0 1-1.6-3.513A4.834 4.834 0 0 1 8 1.852a4.834 4.834 0 0 1 4.891 4.763 4.653 4.653 0 0 1-1.184 3.098z", "data-name": "Layer 21", role: "presentation" })
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
