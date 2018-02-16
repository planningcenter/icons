(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var LocationPin = function LocationPin() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-location-pin", role: "img", className: "symbol symbol-location-pin" },
  React.createElement(
    "title",
    { id: "title-location-pin" },
    "location-pin icon"
  ),
  React.createElement("path", { d: "M9.016 17.005L4.375 11.38a6.017 6.017 0 0 1 .387-8.08 6.016 6.016 0 0 1 8.507 0 6.015 6.015 0 0 1 .387 8.082z", role: "presentation" }),
  React.createElement("circle", { cx: "9.016", cy: "7.536", r: "1.5", fill: "#fff" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = LocationPin;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.LocationPin = LocationPin;
  }
})(this)
