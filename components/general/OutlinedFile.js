(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var OutlinedFile = function OutlinedFile() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-outlined-file", role: "img", className: "symbol symbol-outlined-file" },
  React.createElement(
    "title",
    { id: "title-outlined-file" },
    "outlined-file icon"
  ),
  React.createElement("path", { d: "M10.879 3.505L13.5 6.122v8.383h-9v-11h6.379m.621-1.5H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5.5l-3.5-3.495z", role: "presentation" }),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M10 3v4h4", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = OutlinedFile;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.OutlinedFile = OutlinedFile;
  }
})(this)
