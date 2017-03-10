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
  React.createElement("path", { className: "cls-1", d: "M10.888 7.86a4.56 4.56 0 1 0-6.355.078A7.81 7.81 0 0 0 .2 14.932a.975.975 0 0 0 .975.975h13.232a.975.975 0 0 0 .975-.975 7.805 7.805 0 0 0-4.494-7.072zM7.665 2.043a2.6 2.6 0 1 1-2.6 2.6 2.608 2.608 0 0 1 2.6-2.6zM2.231 13.957a5.614 5.614 0 0 1 5.225-4.751h.667a5.614 5.614 0 0 1 5.225 4.751z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ProfileThickO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.ProfileThickO = ProfileThickO;
  }
})(this)
