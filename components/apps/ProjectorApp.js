(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ProjectorApp = function ProjectorApp() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title-projector-app", role: "img", className: "symbol symbol-projector-app" },
  React.createElement(
    "title",
    { id: "title-projector-app" },
    "projector-app icon"
  ),
  React.createElement("path", { d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.54v1.517a.753.753 0 0 0 .753.753h9.846a.753.753 0 0 0 .753-.753V5.027h4.54a.757.757 0 0 1 .757.757z", "fill-rule": "evenodd", role: "presentation" }),
  React.createElement("path", { d: "M18.48 16.611c-.209.151-2.955 2.522-3.2 2.683-.18.121-.416-.014-.416-.287v-5.362c0-.251.212-.436.424-.29.17.117 2.9 2.474 3.189 2.676a.371.371 0 0 1 .003.58zm-2.451-6.664a6.528 6.528 0 1 0 6.612 6.53 6.57 6.57 0 0 0-6.612-6.53z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ProjectorApp;
  } else {
    global.AppsIcon = global.AppsIcon || {};
    global.AppsIcon.ProjectorApp = ProjectorApp;
  }
})(this)
