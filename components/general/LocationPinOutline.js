(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var LocationPinOutline = function LocationPinOutline() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-location-pin-outline", role: "img", className: "symbol symbol-location-pin-outline" },
  React.createElement(
    "title",
    { id: "title-location-pin-outline" },
    "location-pin-outline icon"
  ),
  React.createElement("path", { d: "M8.984 3.036a4.516 4.516 0 0 1 3.484 7.389l-3.484 4.223L5.5 10.426a4.516 4.516 0 0 1 3.483-7.39m0-1.5a6.016 6.016 0 0 0-4.64 9.844l4.64 5.625 4.641-5.625a6.016 6.016 0 0 0-4.64-9.844z", role: "presentation" }),
  React.createElement("circle", { cx: "8.984", cy: "7.536", r: "1.5" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = LocationPinOutline;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.LocationPinOutline = LocationPinOutline;
  }
})(this)
