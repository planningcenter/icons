(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ApiApp = function ApiApp() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title-api-app", role: "img", className: "symbol symbol-api-app" },
  React.createElement(
    "title",
    { id: "title-api-app" },
    "api-app icon"
  ),
  React.createElement("path", { d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.54v1.517a.753.753 0 0 0 .753.753h9.846a.753.753 0 0 0 .753-.753V5.027h4.54a.757.757 0 0 1 .757.757z", "fill-rule": "evenodd", role: "presentation" }),
  React.createElement("path", { d: "M16.235 15.211l.87-1.508-2.153-1.243-.882 1.528a3.814 3.814 0 0 0-.689-.07 3.856 3.856 0 0 0-.757.077l-.879-1.522-2.153 1.243.893 1.546a3.826 3.826 0 0 0-.716 1.238H8v2.486h1.759a3.805 3.805 0 0 0 .724 1.267l-.868 1.5L11.768 23l.853-1.478a3.783 3.783 0 0 0 1.509 0l.845 1.463 2.153-1.243-.856-1.483a3.8 3.8 0 0 0 .739-1.3h1.709v-2.486h-1.735a3.817 3.817 0 0 0-.75-1.262zm-4.946 2.548a2.092 2.092 0 1 1 2.092 2.092 2.092 2.092 0 0 1-2.092-2.092z", role: "presentation" }),
  React.createElement("path", { d: "M19.779 10.28v1.16a2.312 2.312 0 0 0-.293.132 2.4 2.4 0 0 0-1.181 2.373l-.966.558.906 1.57.952-.55a2.3 2.3 0 0 0 2.968 0l.957.553.906-1.57-.972-.561a2.352 2.352 0 0 0-1.465-2.505v-1.16zm1.353 4.141a.892.892 0 1 1 .326-1.219.892.892 0 0 1-.326 1.219z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ApiApp;
  } else {
    global.AppsIcon = global.AppsIcon || {};
    global.AppsIcon.ApiApp = ApiApp;
  }
})(this)
