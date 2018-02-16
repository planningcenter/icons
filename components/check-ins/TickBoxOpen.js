(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var TickBoxOpen = function TickBoxOpen() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-tick-box-open", role: "img", className: "symbol symbol-tick-box-open" },
  React.createElement(
    "title",
    { id: "title-tick-box-open" },
    "tick-box-open icon"
  ),
  React.createElement("path", { d: "M13.005.018H3A2.9 2.9 0 0 0 .018 2.907v10.1A2.976 2.976 0 0 0 3 15.982h10.01a2.976 2.976 0 0 0 2.977-2.976V2.907A2.9 2.9 0 0 0 13.005.018zm1.081 13.076a.992.992 0 0 1-.993.992H2.907a.993.993 0 0 1-.993-.992V2.907a.994.994 0 0 1 .993-.993h10.186a.993.993 0 0 1 .993.993z", "fill-rule": "evenodd", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = TickBoxOpen;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.TickBoxOpen = TickBoxOpen;
  }
})(this)
