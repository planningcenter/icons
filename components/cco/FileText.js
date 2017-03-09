(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FileText = function FileText() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-file-text" },
  React.createElement(
    "title",
    { id: "title" },
    "file-text icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M7.15,7.21v.52A.29.29,0,0,1,6.85,8a.3.3,0,0,1-.29-.26H6.21V9.26a.3.3,0,0,1,.26.29.29.29,0,0,1-.29.29H5.65a.29.29,0,0,1-.29-.29.3.3,0,0,1,.26-.29V7.76H5.18A.28.28,0,0,1,4.9,8a.29.29,0,0,1-.29-.29V7.21a.29.29,0,0,1,.29-.29.3.3,0,0,1,.29.26H6.58a.29.29,0,0,1,.57,0Z", style: "fill:#020202", role: "presentation" }),
    React.createElement("path", { d: "M10.82,8.35H8.25a.42.42,0,0,1,0-.85h2.57a.42.42,0,1,1,0,.85Z", style: "fill:#020202", role: "presentation" }),
    React.createElement("path", { d: "M10.82,9.83H8.25a.42.42,0,0,1,0-.85h2.57a.42.42,0,1,1,0,.85Z", style: "fill:#020202", role: "presentation" }),
    React.createElement("path", { d: "M10.82,11.31H5a.42.42,0,0,1,0-.85h5.84a.42.42,0,1,1,0,.85Z", style: "fill:#020202", role: "presentation" }),
    React.createElement("path", { d: "M10.82,12.79H5a.42.42,0,1,1,0-.85h5.84a.42.42,0,1,1,0,.85Z", style: "fill:#020202", role: "presentation" }),
    React.createElement("path", { d: "M9.84,0H2.35a.8.8,0,0,0-.8.8V15.2a.8.8,0,0,0,.8.8h11.3a.8.8,0,0,0,.8-.8v-11Zm2.56,4.16H10A.12.12,0,0,1,9.84,4V1.85Zm.7,10.5H2.9V1.35h5.6V4A1.47,1.47,0,0,0,10,5.51H13.1Z", style: "fill:#020202", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FileText;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.FileText = FileText;
  }
})(this)
