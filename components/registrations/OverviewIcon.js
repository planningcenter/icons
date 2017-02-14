(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var OverviewIcon = function OverviewIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-overview" },
  React.createElement(
    "title",
    { id: "title" },
    "overview icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M8 .631a7.875 7.875 0 0 0-7.86 7.86 7.629 7.629 0 0 0 4.068 6.785l.169.092h7.246l.169-.092a7.628 7.628 0 0 0 4.068-6.785A7.875 7.875 0 0 0 8 .631zM8 2.1a6.381 6.381 0 0 1 6.386 6.386 6.112 6.112 0 0 1-3.178 5.4H4.791a6.112 6.112 0 0 1-3.178-5.4A6.381 6.381 0 0 1 8 2.1zm0 1.479a4.867 4.867 0 0 0-2.38.629c.168.107.315.195.491.307A4.337 4.337 0 0 1 8 4.07a4.438 4.438 0 0 1 3.116 1.3l.031.031a4.373 4.373 0 0 1-.03 6.2.25.25 0 1 0 .353.353A4.913 4.913 0 0 0 8 3.578zm-4.421.491s3.147 5 3.638 5.5a1.354 1.354 0 0 0 1.857 0 1.308 1.308 0 0 0 0-1.857c-.491-.491-5.5-3.638-5.5-3.638zm.154 2.03a4.86 4.86 0 0 0-.645 2.395 4.931 4.931 0 0 0 1.443 3.47.25.25 0 1 0 .353-.353 4.438 4.438 0 0 1-1.3-3.116 4.364 4.364 0 0 1 .445-1.919c-.113-.177-.193-.318-.296-.477z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = OverviewIcon
  } else {
    global.OverviewIcon = OverviewIcon
  }
})(this)