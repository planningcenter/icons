(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var TrashCircleOutlineIcon = function TrashCircleOutlineIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-trash-circle-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "trash-circle-outline icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M8.048.139a7.824 7.824 0 1 0 7.824 7.824A7.833 7.833 0 0 0 8.048.139zm0 15.058a7.235 7.235 0 1 1 7.235-7.235A7.243 7.243 0 0 1 8.048 15.2z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M11.112 5.8h-1.6V4.678a.337.337 0 0 0-.336-.336H6.94a.337.337 0 0 0-.336.336V5.8H5a.336.336 0 1 0 0 .672h.518v4.818a.336.336 0 0 0 .336.336h4.4a.336.336 0 0 0 .336-.336V6.473h.518a.336.336 0 0 0 0-.672zm-3.836-.786h1.565V5.8H7.276zm2.646 5.941H6.195V6.473h3.727z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M8.788 10.526a.332.332 0 0 0 .331-.331V7.213a.331.331 0 1 0-.663 0v2.982a.331.331 0 0 0 .332.331zm-1.46 0a.331.331 0 0 0 .331-.331V7.213a.331.331 0 0 0-.663 0v2.982a.332.332 0 0 0 .332.331z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = TrashCircleOutlineIcon
  } else {
    global.TrashCircleOutlineIcon = TrashCircleOutlineIcon
  }
})(this)
