(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var CalendarO = function CalendarO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-calendar-o", role: "img", className: "symbol symbol-calendar-o" },
  React.createElement(
    "title",
    { id: "title-calendar-o" },
    "calendar-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M6.6 9.073a.177.177 0 0 0 .159.024L7.938 8.7v4.12a.177.177 0 0 0 .177.18h.708A.177.177 0 0 0 9 12.823v-5.31a.177.177 0 0 0-.233-.168l-2.124.708a.178.178 0 0 0-.121.168v.708a.177.177 0 0 0 .078.144z", role: "presentation" }),
    React.createElement("path", { d: "M13 1V0h-1v1H4V0H3v1H0v15h16V1zm2 14H1V6h14zm0-10H1V2h2v1h1V2h8v1h1V2h2z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CalendarO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.CalendarO = CalendarO;
  }
})(this)
