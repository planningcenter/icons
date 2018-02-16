(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Calendar = function Calendar() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-calendar", role: "img", className: "symbol symbol-calendar" },
  React.createElement(
    "title",
    { id: "title-calendar" },
    "calendar icon"
  ),
  React.createElement("path", { d: "M14.5 5.505v9h-11v-9h11m.5-1.5H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1z", role: "presentation" }),
  React.createElement("path", { d: "M15 5.005H3v3h12v-3z", role: "presentation" }),
  React.createElement("path", { d: "M5.75 2.005h-1.5v3h1.5v-3zm8 0h-1.5v3h1.5v-3zm-8.5 7.25h1.5v1.5h-1.5zm3 0h1.5v1.5h-1.5zm3 0h1.5v1.5h-1.5z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Calendar;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.Calendar = Calendar;
  }
})(this)
