(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Notification = function Notification() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-notification" },
  React.createElement(
    "title",
    { id: "title" },
    "notification icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M15.32 11.51l-1.9-2.28V5.82A5.37 5.37 0 0 0 8.09.41a5.37 5.37 0 0 0-5.33 5.41v3.41L.86 11.5a1.53 1.53 0 0 0-.22 1.63A1.48 1.48 0 0 0 2 14h3.78a2.49 2.49 0 0 0 4.62 0h3.78a1.48 1.48 0 0 0 1.36-.88 1.53 1.53 0 0 0-.22-1.61z", "data-name": "Layer 9", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Notification;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.Notification = Notification;
  }
})(this)
