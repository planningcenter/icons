(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Lock = function Lock() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-lock", role: "img", className: "symbol symbol-lock" },
  React.createElement(
    "title",
    { id: "title-lock" },
    "lock icon"
  ),
  React.createElement("rect", { x: "3", y: "7.005", width: "12", height: "9", rx: "1", ry: "1" }),
  React.createElement("path", { d: "M9 3.505a2.5 2.5 0 0 1 2.5 2.5v2.5h-5v-2.5a2.5 2.5 0 0 1 2.5-2.5m0-1.5a4 4 0 0 0-4 4v4h8v-4a4 4 0 0 0-4-4z", role: "presentation" }),
  React.createElement("circle", { cx: "9", cy: "11.005", r: "1.5", fill: "#fff" }),
  React.createElement("path", { fill: "#fff", d: "M8.25 12.005h1.5v2h-1.5z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Lock;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.Lock = Lock;
  }
})(this)
