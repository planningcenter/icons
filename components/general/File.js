(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var File = function File() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-file", role: "img", className: "symbol symbol-file" },
  React.createElement(
    "title",
    { id: "title-file" },
    "file icon"
  ),
  React.createElement("path", { d: "M14.995 5L12 2.005V5h2.995z", role: "presentation" }),
  React.createElement("path", { d: "M10.5 2.005H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.5h-4.5z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = File;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.File = File;
  }
})(this)
