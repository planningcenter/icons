(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var CalendarCheckIcon = function CalendarCheckIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-calendar-check" },
  React.createElement(
    "title",
    { id: "title" },
    "calendar-check icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M14.044 2.063h-1.629V0h-1.377v2.063H4.843V0H3.467v2.063h-1.63A1.123 1.123 0 0 0 .713 3.186v10.82a1.123 1.123 0 0 0 1.124 1.123h12.207a1.123 1.123 0 0 0 1.124-1.123V3.186a1.123 1.123 0 0 0-1.124-1.123zm-.253 11.691H2.09V3.439h11.7zm-2.043-6.678l-.941-.99-3.354 3.527L5.806 7.88l-.941.99 2.589 2.723z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CalendarCheckIcon
  } else {
    global.CalendarCheckIcon = CalendarCheckIcon
  }
})(this)
