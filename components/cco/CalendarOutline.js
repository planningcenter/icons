(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var CalendarOutline = function CalendarOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-calendar-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "calendar-outline icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M14.76,6V2.61a.87.87,0,0,0-.85-.89H12.68V.92a.85.85,0,1,0-1.7,0v.8H4.81V.92A.87.87,0,0,0,4,0a.87.87,0,0,0-.85.89v.8H2a.87.87,0,0,0-.85.89V15.09A.87.87,0,0,0,2,16H13.91a.87.87,0,0,0,.85-.89V6.31a.87.87,0,0,0,0-.14A.87.87,0,0,0,14.76,6Zm-1.7,8.16H2.83V7.07H13.05Zm0-8.91H2.83V3.5H13.05Zm-8.25,4.9A.89.89,0,1,0,4,9.3.87.87,0,0,0,4.81,10.19Zm3.16,0a.89.89,0,1,0-.85-.89A.87.87,0,0,0,8,10.19Zm3.16,0a.89.89,0,1,0-.85-.89A.87.87,0,0,0,11.13,10.19ZM4.81,12.86A.89.89,0,1,0,4,12,.87.87,0,0,0,4.81,12.86Zm3.16,0A.89.89,0,1,0,7.12,12,.87.87,0,0,0,8,12.86Zm3.16,0a.89.89,0,1,0-.85-.89A.87.87,0,0,0,11.13,12.86Z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CalendarOutline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.CalendarOutline = CalendarOutline;
  }
})(this)
