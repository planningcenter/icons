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
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-calendar" },
  React.createElement(
    "title",
    { id: "title" },
    "calendar icon"
  ),
  React.createElement("path", { "data-name": "path0 fill", className: "cls-1", d: "M12.25 0a.75.75 0 0 0-.75.75v.75h-7V.75a.75.75 0 0 0-1.5 0v.75H2a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1V.75a.75.75 0 0 0-.75-.75zM2 14.5a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Calendar;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Calendar = Calendar;
  }
})(this)
