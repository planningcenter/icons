(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var OutlinedFiles = function OutlinedFiles() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-outlined-files", role: "img", className: "symbol symbol-outlined-files" },
  React.createElement(
    "title",
    { id: "title-outlined-files" },
    "outlined-files icon"
  ),
  React.createElement("path", { d: "M12.879 2.505L15.5 5.122v8.383h-9v-11h6.379M13.5 1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4.5L13.5 1z", role: "presentation" }),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M12 2v4h4m-2 11H4a1 1 0 0 1-1-1V4", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = OutlinedFiles;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.OutlinedFiles = OutlinedFiles;
  }
})(this)
