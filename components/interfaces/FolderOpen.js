(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FolderOpen = function FolderOpen() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-folder-open" },
  React.createElement(
    "title",
    { id: "title" },
    "folder-open icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M3.169 7.156a1.824 1.824 0 0 0-.625.109 2.373 2.373 0 0 0-.569.3 2.114 2.114 0 0 0-.46.448 2.186 2.186 0 0 0-.308.566L0 12.154V2.5a.978.978 0 0 1 .295-.711.956.956 0 0 1 .7-.3h6.012a.958.958 0 0 1 .7.3A.978.978 0 0 1 8 2.5a1.622 1.622 0 0 0 .291.953.948.948 0 0 0 .7.294h3.551a.925.925 0 0 1 .7.308 1.012 1.012 0 0 1 .291.72v2.381zM16 8.262l-2.257 6.261a.625.625 0 0 1-.265.351.73.73 0 0 1-.413.149H.373l2.136-6.279a.6.6 0 0 1 .265-.344.751.751 0 0 1 .413-.14z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FolderOpen;
  } else {
    global.InterfacesIcon = global.InterfacesIcon || {};
    global.InterfacesIcon.FolderOpen = FolderOpen;
  }
})(this)
