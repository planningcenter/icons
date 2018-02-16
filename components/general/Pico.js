(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Pico = function Pico() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-pico", role: "img", className: "symbol symbol-pico" },
  React.createElement(
    "title",
    { id: "title-pico" },
    "pico icon"
  ),
  React.createElement("circle", { cx: "9", cy: "3.505", r: "1.5" }),
  React.createElement("ellipse", { cx: "6", cy: "10.505", rx: "1", ry: "1.5" }),
  React.createElement("ellipse", { cx: "12", cy: "10.505", rx: "1", ry: "1.5" }),
  React.createElement("path", { d: "M9 7.505a16.03 16.03 0 0 1 4.47.615 1.481 1.481 0 0 1 1.03 1.43v1.91a1.481 1.481 0 0 1-1.03 1.43 16.03 16.03 0 0 1-4.47.615 16.03 16.03 0 0 1-4.47-.615 1.48 1.48 0 0 1-1.03-1.43V9.55a1.48 1.48 0 0 1 1.03-1.43A16.03 16.03 0 0 1 9 7.505m0-1.5a17.373 17.373 0 0 0-4.895.677A2.976 2.976 0 0 0 2 9.55v1.91a2.976 2.976 0 0 0 2.105 2.868A17.373 17.373 0 0 0 9 15.005a17.373 17.373 0 0 0 4.895-.677A2.976 2.976 0 0 0 16 11.46V9.55a2.976 2.976 0 0 0-2.1-2.868A17.373 17.373 0 0 0 9 6.005zm-1 5a1 1 0 1 0 2 0", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Pico;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.Pico = Pico;
  }
})(this)
