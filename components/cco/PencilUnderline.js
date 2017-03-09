(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PencilUnderline = function PencilUnderline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-pencil-underline" },
  React.createElement(
    "title",
    { id: "title" },
    "pencil-underline icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M15.16,14.37H5.06L12.55,4.05a.84.84,0,0,0-.17-1.16L9.42.66A.79.79,0,0,0,8.81.51a.81.81,0,0,0-.54.33L.73,11.22v3.47a.82.82,0,0,0,.32.66.78.78,0,0,0,.29.13.53.53,0,0,0,.15,0H15.16a.57.57,0,0,0,0-1.14ZM1.85,11.6,9,1.76l2.48,1.86L4.33,13.47l-2.49.79Z", style: "fill:#231f20", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PencilUnderline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.PencilUnderline = PencilUnderline;
  }
})(this)
