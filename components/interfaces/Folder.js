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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-folder" },
  React.createElement(
    "title",
    { id: "title" },
    "folder icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M13.87 3.338a.857.857 0 0 1 .646.283.928.928 0 0 1 .269.662v8.68a.907.907 0 0 1-.269.656.87.87 0 0 1-.646.274H.922a.884.884 0 0 1-.65-.274.9.9 0 0 1-.272-.655V2.417a.9.9 0 0 1 .272-.654.884.884 0 0 1 .65-.274h5.552a.885.885 0 0 1 .65.274.9.9 0 0 1 .272.654.889.889 0 0 0 .269.651.878.878 0 0 0 .646.27z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Folder;
  } else {
    global.InterfacesIcon = global.InterfacesIcon || {};
    global.InterfacesIcon.Folder = Folder;
  }
})(this)
