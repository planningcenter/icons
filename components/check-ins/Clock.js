(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Clock = function Clock() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-clock" },
  React.createElement(
    "title",
    { id: "title" },
    "clock icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M8.053 15.952a7.976 7.976 0 1 1 7.976-7.976 7.985 7.985 0 0 1-7.976 7.976zm0-14.294a6.318 6.318 0 1 0 6.318 6.318 6.325 6.325 0 0 0-6.318-6.318z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M11.963 9.606H6.919a.362.362 0 0 1-.362-.362V4.5a1 1 0 0 1 1.994 0v3.112h3.412a1 1 0 1 1 0 1.994z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Clock;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Clock = Clock;
  }
})(this)
