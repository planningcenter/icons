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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-calendar-o" },
  React.createElement(
    "title",
    { id: "title" },
    "calendar-o icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M6.6,9.07a.18.18,0,0,0,.16,0L7.94,8.7v4.12a.18.18,0,0,0,.18.18h.71A.18.18,0,0,0,9,12.82V7.51a.18.18,0,0,0-.07-.14.18.18,0,0,0-.16,0l-2.12.71a.18.18,0,0,0-.12.17v.71A.18.18,0,0,0,6.6,9.07Z", role: "presentation" }),
    React.createElement("path", { d: "M13,1V0H12V1H4V0H3V1H0V16H16V1Zm2,14H1V6H15ZM15,5H1V2H3V3H4V2h8V3h1V2h2Z", role: "presentation" })
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
