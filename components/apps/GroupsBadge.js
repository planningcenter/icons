(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var GroupsBadge = function GroupsBadge() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 114 32", "aria-labelledby": "title-groups-badge", role: "img", className: "symbol symbol-groups-badge" },
  React.createElement(
    "title",
    { id: "title-groups-badge" },
    "groups-badge icon"
  ),
  React.createElement("path", { d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.54v1.517a.753.753 0 0 0 .753.753h9.846a.753.753 0 0 0 .753-.753V5.027h4.54a.757.757 0 0 1 .757.757z", "fill-rule": "evenodd", role: "presentation" }),
  React.createElement("path", { d: "M23.189 12.973a2.643 2.643 0 0 0-5.032-1.135h-4.314a2.643 2.643 0 1 0-3.519 3.519v3.556a2.643 2.643 0 1 0 3.519 3.519h4.314a2.643 2.643 0 1 0 3.519-3.519v-3.556a2.642 2.642 0 0 0 1.513-2.384zm-3.027 5.714a2.635 2.635 0 0 0-2.232 2.232h-3.86a2.635 2.635 0 0 0-2.232-2.232v-3.1a2.634 2.634 0 0 0 2.232-2.232h3.86a2.634 2.634 0 0 0 2.232 2.232z", "fill-rule": "evenodd", role: "presentation" }),
  React.createElement("path", { d: "M44.264 23.264a7.709 7.709 0 0 1-8.1-7.921V15.3a7.906 7.906 0 0 1 8.075-7.966 8.455 8.455 0 0 1 6.051 2.113l-2.134 2.575a5.667 5.667 0 0 0-4.026-1.563 4.627 4.627 0 0 0-4.423 4.8v.041a4.616 4.616 0 0 0 4.665 4.885 5.409 5.409 0 0 0 3.19-.925v-2.2h-3.409v-2.927h6.69v6.689a10 10 0 0 1-6.579 2.442zm16.005-8.779c-2.223 0-3.587 1.342-3.587 4.159V23h-3.345V11.207h3.345v2.376a3.643 3.643 0 0 1 3.762-2.6v3.5zm7.231 8.779a6.129 6.129 0 0 1-6.359-6.095v-.044a6.386 6.386 0 0 1 12.759-.044v.044a6.189 6.189 0 0 1-6.4 6.139zm3.1-6.139a3.133 3.133 0 0 0-3.1-3.256 3.021 3.021 0 0 0-3.059 3.212v.044a3.134 3.134 0 0 0 3.1 3.257 3.022 3.022 0 0 0 3.059-3.213zM83 23v-1.672a4.175 4.175 0 0 1-3.455 1.892c-2.53 0-4-1.672-4-4.379v-7.634h3.344v6.578c0 1.585.749 2.4 2.024 2.4S83 19.37 83 17.785v-6.578h3.345V23zm12.767.22a4.527 4.527 0 0 1-3.674-1.76v5.061h-3.345V11.207h3.345V12.9a4.328 4.328 0 0 1 3.674-1.914c2.751 0 5.369 2.157 5.369 6.095v.044c0 3.939-2.574 6.095-5.369 6.095zm2.024-6.139a2.894 2.894 0 1 0-5.742 0v.044a2.894 2.894 0 1 0 5.742 0zm9.226 6.139a8.263 8.263 0 0 1-5.061-1.782l1.431-2.2a6.659 6.659 0 0 0 3.717 1.409c.969 0 1.409-.353 1.409-.88v-.044c0-.726-1.144-.969-2.443-1.365-1.649-.484-3.52-1.254-3.52-3.542v-.044c0-2.4 1.936-3.741 4.313-3.741a8.16 8.16 0 0 1 4.4 1.365l-1.277 2.31a6.989 6.989 0 0 0-3.19-1.1c-.815 0-1.233.353-1.233.815v.044c0 .66 1.123.968 2.4 1.408 1.65.55 3.564 1.342 3.564 3.5v.044c0 2.615-1.958 3.803-4.51 3.803z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = GroupsBadge;
  } else {
    global.AppsIcon = global.AppsIcon || {};
    global.AppsIcon.GroupsBadge = GroupsBadge;
  }
})(this)
