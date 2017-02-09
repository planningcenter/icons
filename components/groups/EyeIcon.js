(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var EyeIcon = function EyeIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-eye" },
  React.createElement(
    "title",
    { id: "title" },
    "eye icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M15.789 7.86c-.09-.224-2.256-5.479-7.724-5.479C2.619 2.381.256 7.61.158 7.833a.877.877 0 0 0 0 .705c.1.223 2.461 5.451 7.907 5.451 5.468 0 7.634-5.255 7.724-5.479a.88.88 0 0 0 0-.65zm-7.724 4.379c-3.615 0-5.558-3-6.128-4.054.57-1.054 2.513-4.055 6.128-4.055s5.441 3.033 5.949 4.055c-.508 1.024-2.323 4.054-5.949 4.054z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M7.968 5.063a3.123 3.123 0 1 0 3.122 3.123 3.126 3.126 0 0 0-3.122-3.123zm0 4.5A1.373 1.373 0 1 1 9.34 8.186a1.373 1.373 0 0 1-1.372 1.372z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EyeIcon
  } else {
    global.EyeIcon = EyeIcon
  }
})(this)
