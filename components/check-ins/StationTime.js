(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var StationTime = function StationTime() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-station-time", role: "img", className: "symbol symbol-station-time" },
  React.createElement(
    "title",
    { id: "title-station-time" },
    "station-time icon"
  ),
  React.createElement("path", { d: "M8 .333A7.667 7.667 0 1 0 15.667 8 7.667 7.667 0 0 0 8 .333zm2.5 11.851a1.046 1.046 0 0 1-1.482-.026l-2.5-2.591v-5a1.047 1.047 0 1 1 2.094 0v4.154l1.909 1.979a1.046 1.046 0 0 1-.021 1.484z", "fill-rule": "evenodd", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = StationTime;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.StationTime = StationTime;
  }
})(this)
