(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var TickBoxFull = function TickBoxFull() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-tick-box-full", role: "img", className: "symbol symbol-tick-box-full" },
  React.createElement(
    "title",
    { id: "title-tick-box-full" },
    "tick-box-full icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1", "fill-rule": "evenodd" },
    React.createElement("path", { d: "M13.005.018H3A2.9 2.9 0 0 0 .018 2.907v10.1A2.976 2.976 0 0 0 3 15.982h10.01a2.976 2.976 0 0 0 2.977-2.976V2.907A2.9 2.9 0 0 0 13.005.018zm1.081 13.076a.992.992 0 0 1-.993.992H2.907a.993.993 0 0 1-.993-.992V2.907a.994.994 0 0 1 .993-.993h10.186a.993.993 0 0 1 .993.993z", role: "presentation" }),
    React.createElement("path", { d: "M7.109 8.582L5.174 6.647 3.705 8.116l3.444 3.444.001-.001.002.001 5.61-5.61-1.51-1.51-4.143 4.142z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = TickBoxFull;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.TickBoxFull = TickBoxFull;
  }
})(this)
