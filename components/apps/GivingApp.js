(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var GivingApp = function GivingApp() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title-giving-app", role: "img", className: "symbol symbol-giving-app" },
  React.createElement(
    "title",
    { id: "title-giving-app" },
    "giving-app icon"
  ),
  React.createElement("path", { d: "M16.422 12.856l-.422.422-.422-.422a3.283 3.283 0 0 0-4.354-.347 3.161 3.161 0 0 0-.243 4.688l.551.55 4.114 4.115a.5.5 0 0 0 .708 0l4.665-4.662a3.161 3.161 0 0 0-.243-4.688 3.284 3.284 0 0 0-4.354.344z", role: "presentation" }),
  React.createElement("path", { d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.54v1.517a.753.753 0 0 0 .753.753h9.846a.753.753 0 0 0 .753-.753V5.027h4.54a.757.757 0 0 1 .757.757z", "fill-rule": "evenodd", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = GivingApp;
  } else {
    global.AppsIcon = global.AppsIcon || {};
    global.AppsIcon.GivingApp = GivingApp;
  }
})(this)
