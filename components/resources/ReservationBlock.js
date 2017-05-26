(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ReservationBlock = function ReservationBlock() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-reservation-block" },
  React.createElement(
    "title",
    { id: "title" },
    "reservation-block icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M14 1.5h-1V.75a.75.75 0 0 0-1.5 0v.75h-7V.75a.75.75 0 0 0-1.5 0v.75H2a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2zm.5 12.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5z", role: "presentation" }),
  React.createElement("rect", { className: "cls-1", x: "2.5", y: "6.5", width: "3", height: "3", rx: ".5", ry: ".5" }),
  React.createElement("rect", { className: "cls-1", x: "10.5", y: "6.5", width: "3", height: "3", rx: ".5", ry: ".5" }),
  React.createElement("rect", { className: "cls-1", x: "6.5", y: "6.5", width: "3", height: "3", rx: ".5", ry: ".5" }),
  React.createElement("rect", { className: "cls-1", x: "2.5", y: "10.5", width: "3", height: "3", rx: ".5", ry: ".5" }),
  React.createElement("rect", { className: "cls-1", x: "10.5", y: "10.5", width: "3", height: "3", rx: ".5", ry: ".5" }),
  React.createElement("rect", { className: "cls-1", x: "6.5", y: "10.5", width: "3", height: "3", rx: ".5", ry: ".5" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ReservationBlock;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.ReservationBlock = ReservationBlock;
  }
})(this)
