(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ProfileThickO = function ProfileThickO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-profile-thick-o" },
  React.createElement(
    "title",
    { id: "title" },
    "profile-thick-o icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M10.89,7.86a4.56,4.56,0,1,0-6.36.08,7.81,7.81,0,0,0-4.34,7,1,1,0,0,0,1,1H14.41a1,1,0,0,0,1-1A7.81,7.81,0,0,0,10.89,7.86ZM7.66,2a2.6,2.6,0,1,1-2.6,2.6A2.61,2.61,0,0,1,7.66,2ZM2.23,14A5.61,5.61,0,0,1,7.46,9.21h.67A5.61,5.61,0,0,1,13.35,14Z", style: "fill:#231f20", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ProfileThickO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.ProfileThickO = ProfileThickO;
  }
})(this)
