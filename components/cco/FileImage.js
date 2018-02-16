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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-file-image", role: "img", className: "symbol symbol-file-image" },
  React.createElement(
    "title",
    { id: "title-file-image" },
    "file-image icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M9.845 0H2.35a.8.8 0 0 0-.805.805V15.2a.805.805 0 0 0 .805.8h11.3a.805.805 0 0 0 .8-.8V4.15zm2.564 4.155l-2.452.007a.118.118 0 0 1-.118-.119V1.849zm.7 10.5H2.9V1.35h5.6l-.012 2.691A1.468 1.468 0 0 0 9.96 5.512l3.145-.012z", role: "presentation" }),
    React.createElement("path", { d: "M4.2 12.638h7.682V6.689H4.2zm6.932-5.2v2.948l-.78-.911-1.16 1.36L6.89 8.149l-1.936 2.259V7.439zM4.954 11.56L6.89 9.3l2.217 2.586H4.954zm4.322.328l1.08-1.259.78.91v.349z", role: "presentation" }),
    React.createElement("path", { d: "M9.2 9.141a.434.434 0 1 0-.433-.434.434.434 0 0 0 .433.434z", role: "presentation" })
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
