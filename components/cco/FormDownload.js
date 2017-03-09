(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FormDownload = function FormDownload() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-form-download" },
  React.createElement(
    "title",
    { id: "title" },
    "form-download icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M8,.19A7.81,7.81,0,1,0,15.81,8,7.82,7.82,0,0,0,8,.19ZM8,14.62A6.62,6.62,0,1,1,14.62,8,6.63,6.63,0,0,1,8,14.62Z", style: "fill:#010101", role: "presentation" }),
    React.createElement("polygon", { points: "8.47 9.06 8.47 5.45 7.28 5.45 7.28 9.09 6.05 7.81 5.24 8.65 7.95 11.36 10.66 8.65 9.77 7.81 8.47 9.06", style: "fill:#010101" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FormDownload;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.FormDownload = FormDownload;
  }
})(this)
