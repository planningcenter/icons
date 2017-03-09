(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FileImage = function FileImage() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-file-image" },
  React.createElement(
    "title",
    { id: "title" },
    "file-image icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M9.84,0H2.35a.8.8,0,0,0-.8.8V15.2a.8.8,0,0,0,.8.8h11.3a.8.8,0,0,0,.8-.8v-11Zm2.56,4.16H10A.12.12,0,0,1,9.84,4V1.85Zm.7,10.5H2.9V1.35h5.6V4A1.47,1.47,0,0,0,10,5.51H13.1Z", style: "fill:#020202", role: "presentation" }),
    React.createElement("path", { d: "M4.2,12.64h7.68V6.69H4.2Zm6.93-5.2v2.95l-.78-.91L9.19,10.83,6.89,8.15,5,10.41v-3ZM5,11.56,6.89,9.3l2.22,2.59H5Zm4.32.33,1.08-1.26.78.91v.35Z", style: "fill:#020202", role: "presentation" }),
    React.createElement("circle", { cx: "9.2", cy: "8.71", r: "0.43", style: "fill:#020202" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FileImage;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.FileImage = FileImage;
  }
})(this)
