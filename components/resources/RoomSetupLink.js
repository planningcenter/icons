(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var RoomSetupLink = function RoomSetupLink() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-room-setup-link" },
  React.createElement(
    "title",
    { id: "title" },
    "room-setup-link icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M5.373 7.225A1.281 1.281 0 0 1 4.4 8.72c-.671.146-.875 1.444-1.008.764L1.74 1.519a1.281 1.281 0 0 1 .974-1.5 1.217 1.217 0 0 1 1.457.97z", role: "presentation" }),
  React.createElement("path", { className: "cls-1", d: "M14.5 7.766c0 .8-.611 1.84-1.365 1.84H4.447c-.754 0-1.365-1.044-1.365-1.84a1.375 1.375 0 0 1 1.365-1.407h8.688A1.375 1.375 0 0 1 14.5 7.766z", role: "presentation" }),
  React.createElement("path", { className: "cls-1", d: "M4.314 15.213c-.05.358-.975.8-1.314.749a.65.65 0 0 1-.524-.743L3.7 8.242a.627.627 0 0 1 .7-.553c.339.053 1.023.475.974.833zm9.109.11c0 .362-.078.655-.421.655a.638.638 0 0 1-.62-.655v-6.51A.638.638 0 0 1 13 8.159c.343 0 .421.293.421.655z", role: "presentation" }),
  React.createElement("path", { className: "cls-1", d: "M13.507 12.068a.709.709 0 0 1-.745.719h-8.19a.709.709 0 0 1-.745-.719c0-.434.333-.386.745-.386h8.191c.411 0 .745-.048.745.386z", role: "presentation" }),
  React.createElement("path", { className: "cls-2", d: "M11.246 0v1.064h-1.063V0H6.992v3.191h3.191V2.128h1.064v1.063h3.191V0zm-3.19 2.128V1.064h1.063v1.064zm5.318 0H12.31V1.064h1.064z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = RoomSetupLink;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.RoomSetupLink = RoomSetupLink;
  }
})(this)
