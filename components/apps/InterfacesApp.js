(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var InterfacesApp = function InterfacesApp() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title-interfaces-app", role: "img", className: "symbol symbol-interfaces-app" },
  React.createElement(
    "title",
    { id: "title-interfaces-app" },
    "interfaces-app icon"
  ),
  React.createElement("path", { d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.54v1.517a.753.753 0 0 0 .753.753h9.846a.753.753 0 0 0 .753-.753V5.027h4.54a.757.757 0 0 1 .757.757z", "fill-rule": "evenodd", role: "presentation" }),
  React.createElement("path", { d: "M15.27 17.088l.717 6.391L22 10 9.198 17.108l6.072-.02z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = InterfacesApp;
  } else {
    global.AppsIcon = global.AppsIcon || {};
    global.AppsIcon.InterfacesApp = InterfacesApp;
  }
})(this)
