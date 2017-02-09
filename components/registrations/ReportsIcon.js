(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var ReportsIcon = function ReportsIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-reports" },
  React.createElement(
    "title",
    { id: "title" },
    "reports icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M7.686 1.145a7.144 7.144 0 1 0 7.557 7.665.454.454 0 0 0-.454-.481H8.49a.322.322 0 0 1-.322-.322V1.6a.454.454 0 0 0-.482-.455z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M9.633 1.616v4.8a.286.286 0 0 0 .286.286h4.974a.432.432 0 0 0 .42-.541 7.014 7.014 0 0 0-5.146-4.969.434.434 0 0 0-.534.424z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ReportsIcon
  } else {
    global.ReportsIcon = ReportsIcon
  }
})(this)
