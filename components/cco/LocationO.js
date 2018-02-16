(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var LocationO = function LocationO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-location-o", role: "img", className: "symbol symbol-location-o" },
  React.createElement(
    "title",
    { id: "title-location-o" },
    "location-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M8 4.75A3.25 3.25 0 1 0 11.25 8 3.254 3.254 0 0 0 8 4.75zm0 1.688A1.562 1.562 0 1 1 6.438 8 1.564 1.564 0 0 1 8 6.438z", role: "presentation" }),
    React.createElement("path", { d: "M14.9 7.25h-.7A6.255 6.255 0 0 0 8.752 1.8v-.7a.75.75 0 1 0-1.5 0v.7A6.255 6.255 0 0 0 1.8 7.25h-.7a.75.75 0 0 0 0 1.5h.7a6.255 6.255 0 0 0 5.452 5.45v.6a.75.75 0 1 0 1.5 0v-.6A6.255 6.255 0 0 0 14.2 8.75h.7a.75.75 0 0 0 0-1.5zM8 12.656A4.656 4.656 0 1 1 12.656 8 4.662 4.662 0 0 1 8 12.656z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = LocationO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.LocationO = LocationO;
  }
})(this)
