(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var RoomSetup = function RoomSetup() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-room-setup" },
  React.createElement(
    "title",
    { id: "title" },
    "room-setup icon"
  ),
  React.createElement("path", { "data-name": "path0 fill", className: "cls-1", d: "M5 0H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM2 5.5a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5z", role: "presentation" }),
  React.createElement("path", { "data-name": "path1 fill", className: "cls-1", d: "M11 1.5h3a.5.5 0 0 1 .5.5v2.75a.75.75 0 0 0 1.5 0V2a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v2.75a.75.75 0 0 0 1.5 0V2a.5.5 0 0 1 .5-.5z", role: "presentation" }),
  React.createElement("path", { "data-name": "path2 fill", className: "cls-1", d: "M2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2.75a.75.75 0 0 0 0-1.5H2a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h2.75a.75.75 0 0 0 0-1.5z", role: "presentation" }),
  React.createElement("path", { "data-name": "path3 fill", className: "cls-1", d: "M8.394 15.112l-1.006-1.006.534-1.124a3.727 3.727 0 0 1-.25-.6L6.5 11.961v-1.422l1.173-.417a3.727 3.727 0 0 1 .25-.6l-.535-1.128 1.006-1.006 1.124.534a3.727 3.727 0 0 1 .6-.25l.421-1.172h1.422l.417 1.173a3.727 3.727 0 0 1 .6.25l1.124-.534 1.006 1.006-.534 1.124a3.725 3.725 0 0 1 .25.6l1.176.42v1.422l-1.173.417a3.725 3.725 0 0 1-.25.6l.534 1.124-1.006 1.006-1.124-.535a3.725 3.725 0 0 1-.6.25L11.961 16h-1.422l-.417-1.173a3.725 3.725 0 0 1-.6-.25zM11.25 13.5A2.25 2.25 0 1 0 9 11.25a2.25 2.25 0 0 0 2.25 2.25z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = RoomSetup;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.RoomSetup = RoomSetup;
  }
})(this)
