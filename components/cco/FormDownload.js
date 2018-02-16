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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-form-download", role: "img", className: "symbol symbol-form-download" },
  React.createElement(
    "title",
    { id: "title-form-download" },
    "form-download icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M8 .187A7.813 7.813 0 1 0 15.812 8 7.822 7.822 0 0 0 8 .187zm0 14.435A6.622 6.622 0 1 1 14.622 8 6.63 6.63 0 0 1 8 14.622z", role: "presentation" }),
    React.createElement("path", { d: "M8.471 9.065v-3.62h-1.19v3.648l-1.229-1.28-.817.842 2.715 2.702 2.709-2.702-.889-.842-1.299 1.252z", role: "presentation" })
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
