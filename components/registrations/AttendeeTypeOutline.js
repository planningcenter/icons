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
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M11.939 8.1a3.6 3.6 0 1 0 3.6 3.6 3.6 3.6 0 0 0-3.6-3.6z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M10.512 4.852s.14-.756.195-1.338c.068-.725-.419-2.6-3.014-2.6s-3.083 1.875-3.015 2.6c.055.582.195 1.338.195 1.338s-.275.127-.275.638c.1 1.282.6.729.7 1.291.251 1.353.822 1.112.822 1.851 0 1.231-.6 1.806-2.468 2.488S.561 12.5.561 12.974v1.26a.337.337 0 0 0 .337.337h8.621a3.744 3.744 0 0 1-.233-5.561 2.973 2.973 0 0 1-.026-.379c0-.739.571-.5.822-1.851.1-.561.608-.009.7-1.291.005-.511-.27-.637-.27-.637z", role: "presentation" }),
    React.createElement("path", { className: "cls-2", d: "M11.932 14.382a.582.582 0 0 1-.558-.54.1.1 0 0 1 0-.027.088.088 0 0 1 0-.029.56.56 0 0 1 1.119.029.576.576 0 0 1-.561.567zm1.117-3.049c-.245.225-1.133.643-.7 1.062a.092.092 0 0 1-.04.152l-.6.2a.09.09 0 0 1-.088-.023.952.952 0 0 1-.26-.619.088.088 0 0 1 0-.023.1.1 0 0 1 0-.024c.034-.546.46-.752.839-1.069.252-.21.376-.638-.069-.739a1.075 1.075 0 0 0-1.107.414.091.091 0 0 1-.129 0l-.456-.5a.093.093 0 0 1 0-.129 1.983 1.983 0 0 1 1.717-.683 1.349 1.349 0 0 1 1.182.723 1.136 1.136 0 0 1-.289 1.258z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = AttendeeTypeOutline;
  } else {
    global.RegistrationsIcon = global.RegistrationsIcon || {};
    global.RegistrationsIcon.AttendeeTypeOutline = AttendeeTypeOutline;
  }
})(this)
