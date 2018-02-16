(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var OpenFolder = function OpenFolder() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-open-folder", role: "img", className: "symbol symbol-open-folder" },
  React.createElement(
    "title",
    { id: "title-open-folder" },
    "open-folder icon"
  ),
  React.createElement("path", { d: "M4.334 7.505H16v-1.5a1 1 0 0 0-1-1H9.618a1 1 0 0 1-.894-.553l-.448-.894a1 1 0 0 0-.894-.553H3a1 1 0 0 0-1 1v5.12a2.493 2.493 0 0 1 2.334-1.62zm11.892 1.5H4.334a1 1 0 0 0-.949.684l-1.333 4A1 1 0 0 0 3 15.005h11.893a1 1 0 0 0 .948-.684l1.334-4a1 1 0 0 0-.949-1.316z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = OpenFolder;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.OpenFolder = OpenFolder;
  }
})(this)
