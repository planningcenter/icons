(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FileSong = function FileSong() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-file-song" },
  React.createElement(
    "title",
    { id: "title" },
    "file-song icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M9.89,0H2.4a.8.8,0,0,0-.8.8V15.2a.8.8,0,0,0,.8.8H13.7a.8.8,0,0,0,.8-.8v-11Zm2.56,4.15H10A.12.12,0,0,1,9.88,4V1.85Zm.7,10.5H2.94V1.35h5.6V4A1.47,1.47,0,0,0,10,5.51h3.14Z", style: "fill:#020202", role: "presentation" }),
    React.createElement("path", { d: "M10.62,7.21A.65.65,0,0,0,10,6.57L7,7.29a.64.64,0,0,0-.49.63v2.65a1.28,1.28,0,0,0-.45-.09,1.3,1.3,0,1,0,1.3,1.3,1.22,1.22,0,0,0,0-.16l0,0V8.3L9.77,7.7V9.76a1.28,1.28,0,0,0-.46-.09,1.3,1.3,0,1,0,1.3,1.3h0ZM6.08,12.33a.55.55,0,1,1,.55-.55A.55.55,0,0,1,6.08,12.33Zm3.23-.81A.55.55,0,1,1,9.86,11,.55.55,0,0,1,9.31,11.52Z", style: "fill:#020202", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FileSong;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.FileSong = FileSong;
  }
})(this)
