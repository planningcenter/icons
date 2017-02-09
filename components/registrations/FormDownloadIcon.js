(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var FormDownloadIcon = function FormDownloadIcon() {
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
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M8.032.663a7.348 7.348 0 1 0 7.348 7.348A7.356 7.356 0 0 0 8.032.663zm0 13.577a6.228 6.228 0 1 1 6.228-6.229 6.235 6.235 0 0 1-6.228 6.229z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M8.475 9.013V5.608h-1.12v3.431L6.199 7.835l-.768.792 2.554 2.542 2.548-2.542-.836-.792-1.222 1.178z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FormDownloadIcon
  } else {
    global.FormDownloadIcon = FormDownloadIcon
  }
})(this)
