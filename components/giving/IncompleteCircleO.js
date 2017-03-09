(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var IncompleteCircleO = function IncompleteCircleO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-incomplete-circle-o" },
  React.createElement(
    "title",
    { id: "title" },
    "incomplete-circle-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M3.705 8.023A4.31 4.31 0 0 0 8 12.345V3.7a4.31 4.31 0 0 0-4.295 4.323z", role: "presentation" }),
    React.createElement("path", { d: "M8 .482a7.541 7.541 0 1 0 7.5 7.541A7.52 7.52 0 0 0 8 .482zm0 13.466a5.925 5.925 0 1 1 5.9-5.925A5.916 5.916 0 0 1 8 13.948z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = IncompleteCircleO;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.IncompleteCircleO = IncompleteCircleO;
  }
})(this)
