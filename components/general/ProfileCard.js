(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ProfileCard = function ProfileCard() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-profile-card", role: "img", className: "symbol symbol-profile-card" },
  React.createElement(
    "title",
    { id: "title-profile-card" },
    "profile-card icon"
  ),
  React.createElement("rect", { x: "2", y: "4.005", width: "14", height: "10", rx: "1", ry: "1" }),
  React.createElement("path", { fill: "none", stroke: "#fff", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M9 7.005h5m-5 3h3", role: "presentation" }),
  React.createElement("rect", { x: "4", y: "6.005", width: "3", height: "3", rx: "1.5", ry: "1.5", fill: "#fff" }),
  React.createElement("path", { d: "M4.25 10h2.5a1 1 0 0 1 1 1v1h-4.5v-1a1 1 0 0 1 1-1z", fill: "#fff", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ProfileCard;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.ProfileCard = ProfileCard;
  }
})(this)
