(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var CheckInsApp = function CheckInsApp() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title-check-ins-app", role: "img", className: "symbol symbol-check-ins-app" },
  React.createElement(
    "title",
    { id: "title-check-ins-app" },
    "check-ins-app icon"
  ),
  React.createElement("path", { d: "M19.846 11.606L14.352 17.1l-2.2-2.2a1.554 1.554 0 1 0-2.2 2.2l3.3 3.295a1.553 1.553 0 0 0 2.2 0l6.591-6.595a1.554 1.554 0 0 0-2.2-2.2z", "fill-rule": "evenodd", role: "presentation" }),
  React.createElement("path", { d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.54v1.517a.753.753 0 0 0 .753.753h9.846a.753.753 0 0 0 .753-.753V5.027h4.54a.757.757 0 0 1 .757.757z", "fill-rule": "evenodd", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CheckInsApp;
  } else {
    global.AppsIcon = global.AppsIcon || {};
    global.AppsIcon.CheckInsApp = CheckInsApp;
  }
})(this)
