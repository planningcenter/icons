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
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M7.146 7.212v.516a.291.291 0 0 1-.295.295.3.3 0 0 1-.295-.258h-.35v1.491a.3.3 0 0 1 .258.295.291.291 0 0 1-.295.295h-.514a.291.291 0 0 1-.295-.295.3.3 0 0 1 .258-.295V7.765h-.442a.28.28 0 0 1-.276.258.291.291 0 0 1-.295-.295v-.516a.291.291 0 0 1 .295-.294.3.3 0 0 1 .295.258h1.38a.286.286 0 0 1 .571.037zm3.673 1.137h-2.57a.425.425 0 0 1 0-.85h2.57a.425.425 0 1 1 0 .85zm0 1.478h-2.57a.425.425 0 0 1 0-.85h2.57a.425.425 0 1 1 0 .85zm0 1.48H4.976a.425.425 0 0 1 0-.85h5.844a.425.425 0 1 1 0 .85zm0 1.478H4.976a.425.425 0 1 1 0-.85h5.844a.425.425 0 1 1 0 .85z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M9.845 0H2.35a.8.8 0 0 0-.8.8v14.4a.8.8 0 0 0 .8.8h11.3a.8.8 0 0 0 .8-.8V4.15zm2.564 4.155l-2.453.007a.118.118 0 0 1-.118-.118V1.85zm.7 10.5H2.9V1.35h5.6v2.691a1.468 1.468 0 0 0 1.46 1.471L13.1 5.5z", role: "presentation" })
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
