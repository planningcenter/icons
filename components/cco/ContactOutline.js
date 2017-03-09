(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ContactOutline = function ContactOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-contact-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "contact-outline icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M13.21,6.18H8.48V5.07h4.73Z", role: "presentation" }),
    React.createElement("rect", { x: "3.19", y: "5.07", width: "4.21", height: "4.21" }),
    React.createElement("path", { d: "M13.39,2h-11A2.44,2.44,0,0,0,0,4.44v7.3a2.44,2.44,0,0,0,2.43,2.43H3.65a.61.61,0,0,0,.61-.61V13h.61v.61a.61.61,0,0,0,.61.61h4.87a.61.61,0,0,0,.61-.61V13h.61v.61a.61.61,0,0,0,.61.61h1.22a2.44,2.44,0,0,0,2.43-2.43V4.44A2.44,2.44,0,0,0,13.39,2Zm1.22,9.74A1.22,1.22,0,0,1,13.39,13h-.61v-.61a.61.61,0,0,0-.61-.61H10.35a.61.61,0,0,0-.61.61V13H6.09v-.61a.61.61,0,0,0-.61-.61H3.65a.61.61,0,0,0-.61.61V13H2.43a1.22,1.22,0,0,1-1.22-1.22V4.44A1.22,1.22,0,0,1,2.43,3.22h11a1.22,1.22,0,0,1,1.22,1.22Z", role: "presentation" }),
    React.createElement("rect", { x: "8.48", y: "7.33", width: "3.25", height: "1.12" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ContactOutline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.ContactOutline = ContactOutline;
  }
})(this)
