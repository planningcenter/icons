(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ProjectorBadge = function ProjectorBadge() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 135 32", "aria-labelledby": "title", role: "img", className: "symbol symbol-projector-badge" },
  React.createElement(
    "title",
    { id: "title" },
    "projector-badge icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.541v1.517a.753.753 0 0 0 .753.753h9.845a.753.753 0 0 0 .753-.753V5.027h4.541a.757.757 0 0 1 .757.757z", role: "presentation" }),
  React.createElement("path", { "class": "cls-2", d: "M18.48 16.611c-.209.151-2.954 2.522-3.2 2.683-.18.12-.416-.014-.416-.287v-5.362c0-.251.212-.436.424-.29.17.117 2.9 2.474 3.189 2.676a.371.371 0 0 1 .003.58zm-2.45-6.664a6.528 6.528 0 1 0 6.611 6.53 6.57 6.57 0 0 0-6.612-6.53zm26.832 8.486h-2.574v4.621H36.9V7.651h6.293c3.675 0 5.9 2.178 5.9 5.324v.044c-.004 3.566-2.776 5.414-6.231 5.414zm2.794-5.391c0-1.519-1.056-2.332-2.75-2.332h-2.618v4.708h2.685a2.385 2.385 0 0 0 2.684-2.332zm11.88 1.496c-2.222 0-3.586 1.343-3.586 4.159v4.356h-3.345V11.26h3.345v2.376a3.642 3.642 0 0 1 3.762-2.6v3.5zm7.081 8.779a6.129 6.129 0 0 1-6.359-6.095v-.044a6.387 6.387 0 0 1 12.762-.044v.044a6.19 6.19 0 0 1-6.403 6.139zm3.1-6.139a3.134 3.134 0 0 0-3.1-3.257 3.022 3.022 0 0 0-3.059 3.213v.044a3.134 3.134 0 0 0 3.1 3.257 3.022 3.022 0 0 0 3.059-3.213zm4.796 9.462a6.97 6.97 0 0 1-1.452-.132V23.89a4.008 4.008 0 0 0 .7.066c.7 0 1.188-.375 1.188-1.364V11.26H76.3v11.6c0 2.592-1.322 3.78-3.787 3.78zm.352-16.678V6.991h3.521v2.971zm16.898 8.361h-8.207a2.735 2.735 0 0 0 2.882 2.31 3.863 3.863 0 0 0 2.86-1.21l1.915 1.694a6.23 6.23 0 0 1-10.979-3.895v-.044a5.872 5.872 0 0 1 5.831-6.139c3.938 0 5.743 3.059 5.743 6.4v.044c-.001.333-.023.532-.045.84zm-5.7-4.6a2.629 2.629 0 0 0-2.552 2.509h5.039a2.53 2.53 0 0 0-2.486-2.508zm13.157 9.594a6.022 6.022 0 0 1-6.139-6.095v-.044a6.055 6.055 0 0 1 6.183-6.139 5.8 5.8 0 0 1 4.709 1.979l-2.046 2.2a3.443 3.443 0 0 0-2.685-1.3 3.014 3.014 0 0 0-2.86 3.213v.044a3.022 3.022 0 0 0 2.992 3.257 3.734 3.734 0 0 0 2.707-1.255l1.958 1.98a5.94 5.94 0 0 1-4.819 2.16zm10.34-.065c-2.046 0-3.433-.814-3.433-3.543V14.12h-1.407v-2.86h1.408V8.245h3.344v3.015h2.772v2.86h-2.772v5.039c0 .77.33 1.144 1.078 1.144a3.394 3.394 0 0 0 1.65-.418v2.685a4.931 4.931 0 0 1-2.64.682zm9.963.065a6.129 6.129 0 0 1-6.359-6.095v-.044a6.387 6.387 0 0 1 12.762-.044v.044a6.19 6.19 0 0 1-6.403 6.139zm3.1-6.139a3.134 3.134 0 0 0-3.1-3.257 3.022 3.022 0 0 0-3.059 3.213v.044a3.134 3.134 0 0 0 3.1 3.257 3.022 3.022 0 0 0 3.059-3.213zm12.014-2.64c-2.222 0-3.586 1.343-3.586 4.159v4.356h-3.345V11.26h3.345v2.376a3.642 3.642 0 0 1 3.762-2.6v3.5z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ProjectorBadge;
  } else {
    global.AppsIcon = global.AppsIcon || {};
    global.AppsIcon.ProjectorBadge = ProjectorBadge;
  }
})(this)