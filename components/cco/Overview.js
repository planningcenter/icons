(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Overview = function Overview() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-overview", role: "img", className: "symbol symbol-overview" },
  React.createElement(
    "title",
    { id: "title-overview" },
    "overview icon"
  ),
  React.createElement("path", { d: "M8 .631a7.875 7.875 0 0 0-7.86 7.86 7.629 7.629 0 0 0 4.068 6.785l.169.093h7.246l.169-.093a7.627 7.627 0 0 0 4.068-6.785A7.875 7.875 0 0 0 8 .631zm0 1.474a6.381 6.381 0 0 1 6.386 6.386 6.112 6.112 0 0 1-3.178 5.4H4.791a6.113 6.113 0 0 1-3.177-5.4A6.381 6.381 0 0 1 8 2.105zm0 1.474a4.868 4.868 0 0 0-2.38.629c.169.107.315.194.492.307A4.337 4.337 0 0 1 8 4.07a4.437 4.437 0 0 1 3.116 1.3l.031.031a4.371 4.371 0 0 1-.03 6.2.25.25 0 0 0 .353.354A4.913 4.913 0 0 0 8 3.578zm-4.421.491s3.147 5 3.638 5.5a1.354 1.354 0 0 0 1.857 0 1.308 1.308 0 0 0 0-1.858c-.491-.491-5.5-3.638-5.5-3.638zm.154 2.03a4.855 4.855 0 0 0-.645 2.395 4.933 4.933 0 0 0 1.443 3.47.25.25 0 0 0 .353-.354 4.437 4.437 0 0 1-1.305-3.12 4.378 4.378 0 0 1 .445-1.919c-.108-.172-.188-.313-.291-.472z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Overview;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Overview = Overview;
  }
})(this)
