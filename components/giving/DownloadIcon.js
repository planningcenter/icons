(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var DownloadIcon = function DownloadIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-download" },
  React.createElement(
    "title",
    { id: "title" },
    "download icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M14.121 11.595v1.202h-12.2v-1.202H.146v2.853h15.75v-2.853h-1.775zm-3.835-4.95L8.908 7.926V2.005H7.133V7.94L5.741 6.645l-1.269 1.18L6.743 9.94l1.268 1.18.002-.001.002.001 1.269-1.18 2.271-2.115-1.269-1.18z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = DownloadIcon
  } else {
    global.DownloadIcon = DownloadIcon
  }
})(this)
