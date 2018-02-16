(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var TextFile = function TextFile() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-text-file", role: "img", className: "symbol symbol-text-file" },
  React.createElement(
    "title",
    { id: "title-text-file" },
    "text-file icon"
  ),
  React.createElement("path", { d: "M14.995 5L12 2.005V5h2.995z", role: "presentation" }),
  React.createElement("path", { d: "M10.5 6.5V2.005H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.5zM6 8.255h4v1.5H6zm6 4.5H6v-1.5h6z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = TextFile;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.TextFile = TextFile;
  }
})(this)
