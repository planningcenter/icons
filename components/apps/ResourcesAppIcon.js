(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var ResourcesAppIcon = function ResourcesAppIcon() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title", role: "img", className: "symbol symbol-resources-app" },
  React.createElement(
    "title",
    { id: "title" },
    "resources-app icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.541v1.517a.753.753 0 0 0 .753.753h9.845a.753.753 0 0 0 .753-.753V5.027h4.541a.757.757 0 0 1 .757.757z", role: "presentation" }),
  React.createElement("rect", { "class": "cls-2", x: "9", y: "11", width: "6", height: "5", rx: ".431", ry: ".431" }),
  React.createElement("rect", { "class": "cls-2", x: "17", y: "11", width: "6", height: "5", rx: ".431", ry: ".431" }),
  React.createElement("rect", { "class": "cls-2", x: "9", y: "18", width: "6", height: "5", rx: ".431", ry: ".431" }),
  React.createElement("rect", { "class": "cls-2", x: "17", y: "18", width: "6", height: "5", rx: ".431", ry: ".431" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ResourcesAppIcon
  } else {
    global.ResourcesAppIcon = ResourcesAppIcon
  }
})(this)
