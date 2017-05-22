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
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-notification" },
  React.createElement(
    "title",
    { id: "title" },
    "notification icon"
  ),
  React.createElement("path", { d: "M15.323 11.506l-1.905-2.272V5.817A5.374 5.374 0 0 0 8.089.41a5.374 5.374 0 0 0-5.328 5.407v3.417L.856 11.5a1.533 1.533 0 0 0-.219 1.635A1.481 1.481 0 0 0 2 14.024h3.78a2.486 2.486 0 0 0 4.619 0h3.782a1.485 1.485 0 0 0 1.361-.885 1.529 1.529 0 0 0-.219-1.633z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Notification;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Notification = Notification;
  }
})(this)
