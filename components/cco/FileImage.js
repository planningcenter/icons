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
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M9.845 0H2.35a.8.8 0 0 0-.8.8v14.4a.8.8 0 0 0 .8.8h11.3a.8.8 0 0 0 .8-.8V4.15zm2.564 4.155l-2.453.007a.118.118 0 0 1-.118-.118V1.85zm.7 10.5H2.9V1.35h5.6v2.691a1.468 1.468 0 0 0 1.46 1.471L13.1 5.5z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M4.2 12.638h7.682V6.689H4.2zm6.932-5.2v2.948l-.78-.91-1.16 1.359L6.89 8.149l-1.936 2.259V7.439zM4.954 11.56L6.89 9.3l2.217 2.587H4.954zm4.322.328l1.08-1.26.78.911v.349z", role: "presentation" }),
    React.createElement("circle", { "class": "cls-1", cx: "9.2", cy: "8.707", r: ".433" })
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
