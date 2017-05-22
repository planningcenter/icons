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
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-folder" },
  React.createElement(
    "title",
    { id: "title" },
    "folder icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M14.715 3.273a.591.591 0 0 0-.591-.591H8.261V2.4a.855.855 0 0 0-.855-.855H2.061a.855.855 0 0 0-.855.855v.283H.671a.591.591 0 0 0-.591.591v2.114h14.635zM.08 6.719v7.175a.808.808 0 0 0 .808.808h12.936a.808.808 0 0 0 .8-.666l1.3-7.316z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Folder;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Folder = Folder;
  }
})(this)
