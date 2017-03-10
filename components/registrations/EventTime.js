(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var EventTime = function EventTime() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-event-time" },
  React.createElement(
    "title",
    { id: "title" },
    "event-time icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M7.944 14.14A6.14 6.14 0 1 1 14.083 8a6.146 6.146 0 0 1-6.139 6.14zm0-10.878A4.738 4.738 0 1 0 12.682 8a4.744 4.744 0 0 0-4.738-4.738z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M10.018 9.9a.7.7 0 0 1-.349-.1L7.243 8.4V4.922a.7.7 0 1 1 1.4 0V7.6l1.724.994a.7.7 0 0 1-.35 1.308z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EventTime;
  } else {
    global.RegistrationsIcon = global.RegistrationsIcon || {};
    global.RegistrationsIcon.EventTime = EventTime;
  }
})(this)