(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PlusCircle = function PlusCircle() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-plus-circle", role: "img", className: "symbol symbol-plus-circle" },
  React.createElement(
    "title",
    { id: "title-plus-circle" },
    "plus-circle icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M7.994.013a7.994 7.994 0 1 0 7.993 7.993A7.994 7.994 0 0 0 7.994.013zm0 14.317a6.323 6.323 0 1 1 6.322-6.323 6.324 6.324 0 0 1-6.322 6.323z", role: "presentation" }),
    React.createElement("path", { d: "M11 7.183H8.8v-2.2a.807.807 0 1 0-1.613 0v2.2h-2.2a.807.807 0 1 0 0 1.613h2.2V11A.807.807 0 1 0 8.8 11V8.8H11a.807.807 0 1 0 0-1.613z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PlusCircle;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.PlusCircle = PlusCircle;
  }
})(this)
