(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var LockO = function LockO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-lock-o" },
  React.createElement(
    "title",
    { id: "title" },
    "lock-o icon"
  ),
  React.createElement("path", { d: "M12.94 7V5.92a4.94 4.94 0 0 0-9.94 0V7a1.81 1.81 0 0 0-1.8 1.79v5.45A1.81 1.81 0 0 0 3 16h9.94a1.81 1.81 0 0 0 1.81-1.8V8.79A1.81 1.81 0 0 0 12.94 7zM4.78 5.92a3.19 3.19 0 0 1 6.39 0V7H4.78zM13 14.24a.06.06 0 0 1-.06.05l-10-.05L3 8.73l10 .05z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = LockO;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.LockO = LockO;
  }
})(this)
