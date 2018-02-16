(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var InTray = function InTray() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-in-tray", role: "img", className: "symbol symbol-in-tray" },
  React.createElement(
    "title",
    { id: "title-in-tray" },
    "in-tray icon"
  ),
  React.createElement("path", { d: "M14.5 3.505v11h-11v-11h11m.5-1.5H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1z", role: "presentation" }),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M8.856 5.005v4.168M11 7.03L8.856 9.173 6.713 7.03", role: "presentation" }),
  React.createElement("path", { d: "M11 11.005a2 2 0 1 1-4 0H3v4h12v-4z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = InTray;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.InTray = InTray;
  }
})(this)
