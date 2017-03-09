(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var AttendeeTypeOutline = function AttendeeTypeOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-attendee-type-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "attendee-type-outline icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M11.94,7.6A4,4,0,0,0,10.13,8a2.85,2.85,0,0,0,.44-1.14c.39-.19.65-.49.72-1.41A1.36,1.36,0,0,0,11,4.68c0-.28.12-.74.15-1.12a2.87,2.87,0,0,0-.75-2.09A3.55,3.55,0,0,0,7.69.42,3.55,3.55,0,0,0,4.93,1.47a2.86,2.86,0,0,0-.75,2.09c0,.38.11.84.15,1.12a1.43,1.43,0,0,0-.24.85c.06.85.31,1.16.72,1.37a2.62,2.62,0,0,0,.66,1.42c.13.15.14.16.14.31,0,.87-.3,1.35-2.14,2C.06,11.9.06,12.68.06,13v1.26a.84.84,0,0,0,.84.84H9.62A4.1,4.1,0,1,0,11.94,7.6ZM1.06,14.07V13c.07-.15.7-.69,2.78-1.45,1.81-.66,2.8-1.33,2.8-3a1.31,1.31,0,0,0-.39-1,1.67,1.67,0,0,1-.44-1A.91.91,0,0,0,5.21,6a1,1,0,0,1-.11-.49c0-.13,0-.19,0-.19h0l.33-.15-.07-.38S5.23,4,5.18,3.47a1.88,1.88,0,0,1,.49-1.32,2.61,2.61,0,0,1,2-.73,2.61,2.61,0,0,1,2,.73,1.88,1.88,0,0,1,.49,1.32C10.16,4,10,4.76,10,4.76l-.13.34.35.16a.3.3,0,0,1,0,.18c0,.43-.11.53-.16.55a.87.87,0,0,0-.53.68,1.67,1.67,0,0,1-.44,1,1.31,1.31,0,0,0-.39,1c0,.07,0,.13,0,.2a4.23,4.23,0,0,0-.37,5.24Zm10.88.72a3.1,3.1,0,1,1,3.1-3.1A3.1,3.1,0,0,1,11.94,14.79Z", style: "fill:#231f20", role: "presentation" }),
    React.createElement("path", { d: "M11.93,13.26a.57.57,0,0,0-.56.53.09.09,0,0,0,0,0,.1.1,0,0,0,0,0,.56.56,0,0,0,1.12,0A.57.57,0,0,0,11.93,13.26Z", style: "fill:#231f20", role: "presentation" }),
    React.createElement("path", { d: "M12.16,9.35a2,2,0,0,0-1.72.68.09.09,0,0,0,0,.13l.46.5a.09.09,0,0,0,.13,0,1.08,1.08,0,0,1,1.11-.41c.45.1.32.53.07.74s-.81.52-.84,1.07a.1.1,0,0,0,0,0,.09.09,0,0,0,0,0,1,1,0,0,0,.26.62.09.09,0,0,0,.09,0l.6-.2a.09.09,0,0,0,0-.15c-.44-.42.45-.84.7-1.06a1.14,1.14,0,0,0,.29-1.26A1.35,1.35,0,0,0,12.16,9.35Z", style: "fill:#231f20", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = AttendeeTypeOutline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.AttendeeTypeOutline = AttendeeTypeOutline;
  }
})(this)
