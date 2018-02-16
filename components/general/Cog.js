(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Cog = function Cog() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-cog", role: "img", className: "symbol symbol-cog" },
  React.createElement(
    "title",
    { id: "title-cog" },
    "cog icon"
  ),
  React.createElement("path", { d: "M8.25 12.333h1.5L9.562 15H8.437l-.187-2.667zM8.437 3h1.125l.188 2.667h-1.5L8.437 3z", role: "presentation" }),
  React.createElement("path", { d: "M9 4.333A4.667 4.667 0 1 0 13.667 9 4.668 4.668 0 0 0 9 4.333zM9 12a3 3 0 1 1 3-3 3 3 0 0 1-3 3z", role: "presentation" }),
  React.createElement("path", { d: "M10.827 11.887l1.06-1.06 1.753 2.018-.795.795-2.018-1.753zM4.36 5.155l.795-.795 2.018 1.753-1.06 1.06L4.36 5.155zm7.973 4.595v-1.5L15 8.438v1.125l-2.667.187zM3 9.563V8.438l2.667-.188v1.5L3 9.563zm8.887-2.39l-1.06-1.06 2.018-1.753.795.795-1.753 2.018zM5.155 13.64l-.795-.795 1.753-2.018 1.06 1.06-2.018 1.753z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Cog;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.Cog = Cog;
  }
})(this)
