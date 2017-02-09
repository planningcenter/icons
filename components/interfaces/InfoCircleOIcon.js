(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var InfoCircleOIcon = function InfoCircleOIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-info-circle-o" },
  React.createElement(
    "title",
    { id: "title" },
    "info-circle-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M.128 8.007A7.872 7.872 0 1 0 8 .139 7.872 7.872 0 0 0 .128 8.007zm1.45 0A6.422 6.422 0 1 1 8 14.426a6.421 6.421 0 0 1-6.422-6.419z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M10.054 11.5l-.772.332a.572.572 0 0 1-.751-.613l.822-4.288a.709.709 0 0 0-.7-.8H6.182c-.362 0-.469.192-.469.319s.181.245.746.394.362.511.341.7-.437 2.461-.511 2.919-.575 2.365 1.438 2.45a3.265 3.265 0 0 0 2.478-1 .242.242 0 0 0-.151-.413zM8.5 5.629A1.369 1.369 0 1 0 7.131 4.26 1.369 1.369 0 0 0 8.5 5.629z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = InfoCircleOIcon
  } else {
    global.InfoCircleOIcon = InfoCircleOIcon
  }
})(this)
