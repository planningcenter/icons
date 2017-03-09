(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var SkipCircleO = function SkipCircleO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-skip-circle-o" },
  React.createElement(
    "title",
    { id: "title" },
    "skip-circle-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M8 .533a7.5 7.5 0 1 0 7.5 7.5A7.5 7.5 0 0 0 8 .533zm0 13.393a5.893 5.893 0 1 1 5.9-5.893A5.9 5.9 0 0 1 8 13.926z", role: "presentation" }),
    React.createElement("path", { d: "M8.94 4.565L7.9 5.611l1.393 1.377a5.6 5.6 0 0 0-2.856.294 5.445 5.445 0 0 0-2.7 2.257L4.8 10.676a3.782 3.782 0 0 1 2.182-2.027A4.283 4.283 0 0 1 9.373 8.5L7.922 9.96 8.968 11l3.2-3.23z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = SkipCircleO;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.SkipCircleO = SkipCircleO;
  }
})(this)
