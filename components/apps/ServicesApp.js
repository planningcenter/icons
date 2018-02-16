(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ServicesApp = function ServicesApp() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title-services-app", role: "img", className: "symbol symbol-services-app" },
  React.createElement(
    "title",
    { id: "title-services-app" },
    "services-app icon"
  ),
  React.createElement("path", { d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.54v1.517a.753.753 0 0 0 .753.753h9.846a.753.753 0 0 0 .753-.753V5.027h4.54a.757.757 0 0 1 .757.757z", "fill-rule": "evenodd", role: "presentation" }),
  React.createElement("rect", { x: "9", y: "10", width: "14", height: "3", rx: ".464", ry: ".464" }),
  React.createElement("rect", { x: "9", y: "15", width: "14", height: "3", rx: ".464", ry: ".464" }),
  React.createElement("rect", { x: "9", y: "20", width: "14", height: "3", rx: ".464", ry: ".464" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ServicesApp;
  } else {
    global.AppsIcon = global.AppsIcon || {};
    global.AppsIcon.ServicesApp = ServicesApp;
  }
})(this)
