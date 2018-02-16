(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Folder = function Folder() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-folder", role: "img", className: "symbol symbol-folder" },
  React.createElement(
    "title",
    { id: "title-folder" },
    "folder icon"
  ),
  React.createElement("path", { d: "M15 15.005H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h4.382a1 1 0 0 1 .894.553l.448.894a1 1 0 0 0 .894.553H15a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Folder;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.Folder = Folder;
  }
})(this)
