(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Rooms = function Rooms() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-rooms" },
  React.createElement(
    "title",
    { id: "title" },
    "rooms icon"
  ),
  React.createElement("rect", { className: "cls-1", width: "6.885", height: "6.893", rx: ".4", ry: ".4" }),
  React.createElement("rect", { className: "cls-1", x: "9.115", width: "6.885", height: "6.893", rx: ".4", ry: ".4" }),
  React.createElement("rect", { className: "cls-1", y: "9.107", width: "6.885", height: "6.893", rx: ".4", ry: ".4" }),
  React.createElement("rect", { className: "cls-1", x: "9.115", y: "9.107", width: "6.885", height: "6.893", rx: ".4", ry: ".4" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Rooms;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Rooms = Rooms;
  }
})(this)
