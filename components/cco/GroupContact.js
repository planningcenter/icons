(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var GroupContact = function GroupContact() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-group-contact" },
  React.createElement(
    "title",
    { id: "title" },
    "group-contact icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M2.83,9.84a.77.77,0,0,0,0-1.53H.68a.77.77,0,0,0,0,1.53H2.83ZM14.53,0H3.34A1.45,1.45,0,0,0,1.87,1.44V2.56h1A1.67,1.67,0,0,1,4.44,4.27,1.67,1.67,0,0,1,2.83,6h-1V7.36h1A1.67,1.67,0,0,1,4.44,9.07a1.81,1.81,0,0,1-.27,1,1.6,1.6,0,0,1-1.34.75h-1V12a1.45,1.45,0,0,0,1.47,1.43H14.53A1.45,1.45,0,0,0,16,12V10.61h0V1.44A1.46,1.46,0,0,0,14.53,0Zm-5,7.82-.08-.07h0l.08.07ZM14.9,9.58A2.43,2.43,0,0,0,14,9.15c-1.9-.53-2.82-.74-3-1.38a4.58,4.58,0,0,0,1.48-3.15A2.62,2.62,0,0,0,10,1.9,2.59,2.59,0,0,0,7.54,4.53,4.81,4.81,0,0,0,8.92,7.75L9,7.82H8.9c-.21.6-1.13.82-3,1.33h0V2.71A1.46,1.46,0,0,1,7.31,1.22H14c.78,0,.85.67.85,1.49ZM.68,5H2.83a.72.72,0,0,0,.67-.76.72.72,0,0,0-.67-.77H.68A.73.73,0,0,0,0,4.27.72.72,0,0,0,.68,5Z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = GroupContact;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.GroupContact = GroupContact;
  }
})(this)
