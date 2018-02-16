(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Pencil = function Pencil() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-pencil", role: "img", className: "symbol symbol-pencil" },
  React.createElement(
    "title",
    { id: "title-pencil" },
    "pencil icon"
  ),
  React.createElement("path", { d: "M6.092 13.83H4.175v-1.917L9.927 6.16l1.918 1.918-5.753 5.752zm5.99-9.825L14 5.923l-1.365 1.365-1.918-1.917z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Pencil;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.Pencil = Pencil;
  }
})(this)
