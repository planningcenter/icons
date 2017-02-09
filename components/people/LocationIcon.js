(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var LocationIcon = function LocationIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-location" },
  React.createElement(
    "title",
    { id: "title" },
    "location icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M13.384 3.86a6.11 6.11 0 0 0-10.769 0 5.855 5.855 0 0 0 .439 6.182l3.207 4.45a2.152 2.152 0 0 0 3.478 0l3.207-4.45a5.854 5.854 0 0 0 .438-6.182zM11.5 9.034l-3.207 4.45a.36.36 0 0 1-.582 0L4.5 9.034a4.088 4.088 0 0 1-.31-4.373A4.226 4.226 0 0 1 8 2.382a4.227 4.227 0 0 1 3.809 2.279 4.088 4.088 0 0 1-.309 4.373zM8 5a1.8 1.8 0 1 0 1.829 1.8A1.814 1.814 0 0 0 8 5z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = LocationIcon
  } else {
    global.LocationIcon = LocationIcon
  }
})(this)
