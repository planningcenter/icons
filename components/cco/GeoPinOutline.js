(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var GeoPinOutline = function GeoPinOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-geo-pin-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "geo-pin-outline icon"
  ),
  React.createElement("path", { d: "M8 .028a5.849 5.849 0 0 0-5.695 5.979 6.065 6.065 0 0 0 1.109 3.542l3.8 5.979a.924.924 0 0 0 1.579 0l3.766-5.934a6.133 6.133 0 0 0 1.139-3.588A5.849 5.849 0 0 0 8 .028zm3.007 8.416L8 13.18 4.962 8.4A4.076 4.076 0 0 1 4.2 6.007 3.9 3.9 0 0 1 8 2.021a3.9 3.9 0 0 1 3.8 3.986 4.146 4.146 0 0 1-.793 2.437zM7.326 5.3a1.047 1.047 0 0 0 0 1.415.93.93 0 0 0 1.348 0 1.047 1.047 0 0 0 0-1.415.959.959 0 0 0-1.348 0z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = GeoPinOutline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.GeoPinOutline = GeoPinOutline;
  }
})(this)