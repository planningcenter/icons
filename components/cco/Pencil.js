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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-pencil" },
  React.createElement(
    "title",
    { id: "title" },
    "pencil icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M15.36,3.45,12.57.68a1.54,1.54,0,0,0-2.13,0L1,10.11A1.72,1.72,0,0,0,.46,11.3L.2,14.59a1.07,1.07,0,0,0,1.07,1.16h.08l3.3-.24A1.79,1.79,0,0,0,5.9,15l9.46-9.42a1.49,1.49,0,0,0,0-2.12Zm-12.78,7L8.37,4.72,11.3,7.64,5.51,13.4Zm-.75,1.23,2.43,2.42-2.63.19ZM14.37,4.58,12.29,6.65,9.37,3.73l2.07-2.07a.1.1,0,0,1,.07,0,.1.1,0,0,1,.07,0l2.79,2.78Z", style: "fill:#231f20", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Pencil;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Pencil = Pencil;
  }
})(this)
