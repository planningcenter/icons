(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var SkipStepIcon = function SkipStepIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-skip-step" },
  React.createElement(
    "title",
    { id: "title" },
    "skip-step icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M10.022 13.912l-2.011-2.011 3.966-3.967-3.966-3.967 2.011-2.011L16 7.934l-5.978 5.978z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M2.357 13.912L.346 11.901l3.967-3.967L.346 3.967l2.011-2.011 5.979 5.978-5.979 5.978z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = SkipStepIcon
  } else {
    global.SkipStepIcon = SkipStepIcon
  }
})(this)
