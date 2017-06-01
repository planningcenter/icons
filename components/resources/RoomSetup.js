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
  React.createElement("path", { className: "cls-1", d: "M15.25 13h-.75V3h.75a.75.75 0 0 0 0-1.5h-.75V.75a.75.75 0 0 0-1.5 0v.75H3V.75a.75.75 0 0 0-1.5 0v.75H.75a.75.75 0 0 0 0 1.5h.75v10H.75a.75.75 0 0 0 0 1.5h.75v.75a.75.75 0 0 0 1.5 0v-.75h10v.75a.75.75 0 0 0 1.5 0v-.75h.75a.75.75 0 0 0 0-1.5zM13 13H3V3h10z", role: "presentation" }),
  React.createElement("path", { className: "cls-1", d: "M4.5 7.5H7a.5.5 0 0 0 .5-.5V4.5A.5.5 0 0 0 7 4H4.5a.5.5 0 0 0-.5.5V7a.5.5 0 0 0 .5.5zM5 5h1.5v1.5H5zm4 2.5h2.5A.5.5 0 0 0 12 7V4.5a.5.5 0 0 0-.5-.5H9a.5.5 0 0 0-.5.5V7a.5.5 0 0 0 .5.5zM9.5 5H11v1.5H9.5zm-5 7H7a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5H4.5A.5.5 0 0 0 4 9v2.5a.5.5 0 0 0 .5.5zM5 9.5h1.5V11H5zM9 12h2.5a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5H9a.5.5 0 0 0-.5.5v2.5a.5.5 0 0 0 .5.5zm.5-2.5H11V11H9.5z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = RoomSetup;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.RoomSetup = RoomSetup;
  }
})(this)
