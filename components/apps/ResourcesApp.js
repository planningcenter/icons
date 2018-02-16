(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ResourcesApp = function ResourcesApp() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title-resources-app", role: "img", className: "symbol symbol-resources-app" },
  React.createElement(
    "title",
    { id: "title-resources-app" },
    "resources-app icon"
  ),
  React.createElement("path", { d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.54v1.517a.753.753 0 0 0 .753.753h9.846a.753.753 0 0 0 .753-.753V5.027h4.54a.757.757 0 0 1 .757.757z", "fill-rule": "evenodd", role: "presentation" }),
  React.createElement("rect", { x: "9", y: "11", width: "6", height: "5", rx: ".431", ry: ".431" }),
  React.createElement("rect", { x: "17", y: "11", width: "6", height: "5", rx: ".431", ry: ".431" }),
  React.createElement("rect", { x: "9", y: "18", width: "6", height: "5", rx: ".431", ry: ".431" }),
  React.createElement("rect", { x: "17", y: "18", width: "6", height: "5", rx: ".431", ry: ".431" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ResourcesApp;
  } else {
    global.AppsIcon = global.AppsIcon || {};
    global.AppsIcon.ResourcesApp = ResourcesApp;
  }
})(this)
