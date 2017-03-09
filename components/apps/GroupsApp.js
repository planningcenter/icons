(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var GroupsApp = function GroupsApp() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title", role: "img", className: "symbol symbol-groups-app" },
  React.createElement(
    "title",
    { id: "title" },
    "groups-app icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.541v1.517a.753.753 0 0 0 .753.753h9.845a.753.753 0 0 0 .753-.753V5.027h4.541a.757.757 0 0 1 .757.757z", role: "presentation" }),
  React.createElement("path", { "class": "cls-1", d: "M23.189 12.973a2.643 2.643 0 0 0-5.033-1.135h-4.313a2.643 2.643 0 1 0-3.519 3.519v3.556a2.643 2.643 0 1 0 3.519 3.519h4.313a2.643 2.643 0 1 0 3.519-3.519v-3.556a2.642 2.642 0 0 0 1.514-2.384zm-3.027 5.714a2.634 2.634 0 0 0-2.232 2.232h-3.86a2.634 2.634 0 0 0-2.232-2.232v-3.1a2.634 2.634 0 0 0 2.232-2.232h3.86a2.634 2.634 0 0 0 2.232 2.232z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = GroupsApp;
  } else {
    global.AppsIcon = global.AppsIcon || {};
    global.AppsIcon.GroupsApp = GroupsApp;
  }
})(this)
