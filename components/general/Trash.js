(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Trash = function Trash() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-trash", role: "img", className: "symbol symbol-trash" },
  React.createElement(
    "title",
    { id: "title-trash" },
    "trash icon"
  ),
  React.createElement("path", { d: "M11 4.005a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5a1 1 0 0 0-1 1v1h10v-1a1 1 0 0 0-1-1zm-6 3.51v6.49a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6.49z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Trash;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.Trash = Trash;
  }
})(this)
