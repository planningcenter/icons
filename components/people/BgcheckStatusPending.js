(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var BgcheckStatusPending = function BgcheckStatusPending() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-bgcheck-status-pending", role: "img", className: "symbol symbol-bgcheck-status-pending" },
  React.createElement(
    "title",
    { id: "title-bgcheck-status-pending" },
    "bgcheck-status-pending icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "data-name": "Subtraction 10", className: "cls-1", d: "M8.04 15.825a1.7 1.7 0 0 1-.946-.3l-4.578-3.509a5.47 5.47 0 0 1-2.09-4.309V3a.506.506 0 0 1 .4-.5L7.493.29a1.688 1.688 0 0 1 .995 0l6.768 2.21a1 1 0 0 1 .4.5v4.707a5.47 5.47 0 0 1-2.09 4.309l-4.58 3.508a1.7 1.7 0 0 1-.946.301zm2.7-9.6A1.173 1.173 0 1 0 11.9 7.4a1.171 1.171 0 0 0-1.162-1.172zm-2.847 0A1.173 1.173 0 1 0 9.055 7.4a1.171 1.171 0 0 0-1.164-1.172zm-2.847 0A1.173 1.173 0 1 0 6.209 7.4a1.17 1.17 0 0 0-1.165-1.172z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = BgcheckStatusPending;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.BgcheckStatusPending = BgcheckStatusPending;
  }
})(this)
