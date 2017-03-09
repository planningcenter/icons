(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var EmailThickO = function EmailThickO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-email-thick-o" },
  React.createElement(
    "title",
    { id: "title" },
    "email-thick-o icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M15.91,2.88a.94.94,0,0,0,0-.21.94.94,0,0,0-.1-.17.91.91,0,0,0-.07-.12l0,0a1,1,0,0,0-.17-.13,1,1,0,0,0-.14-.09l-.17,0A1,1,0,0,0,15,2H1a1,1,0,0,0-.22,0l-.15,0L.5,2.18a1,1,0,0,0-.22.16h0a.92.92,0,0,0-.08.12,1,1,0,0,0-.12.19,1,1,0,0,0,0,.23A.92.92,0,0,0,0,3V13a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V3A.92.92,0,0,0,15.91,2.88ZM12.34,4,7.69,8,3.43,4ZM1.95,12V5.27L7,10a1,1,0,0,0,1.31,0L14,5.14V12Z", style: "fill:#231f20", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EmailThickO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.EmailThickO = EmailThickO;
  }
})(this)
