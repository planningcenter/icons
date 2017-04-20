(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var UnlockO = function UnlockO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-unlock-o" },
  React.createElement(
    "title",
    { id: "title" },
    "unlock-o icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M13.06 7.09V5a4.94 4.94 0 0 0-9.77-1.15l1.7.4a3.19 3.19 0 0 1 6.3.74v2.1H3.13A1.81 1.81 0 0 0 1.32 8.9v5.45a1.81 1.81 0 0 0 1.81 1.81h9.94a1.81 1.81 0 0 0 1.8-1.81V8.9a1.81 1.81 0 0 0-1.81-1.81zm.05 7.26a.06.06 0 0 1-.05.06l-10-.06.06-5.51 10 .06z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = UnlockO;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.UnlockO = UnlockO;
  }
})(this)
