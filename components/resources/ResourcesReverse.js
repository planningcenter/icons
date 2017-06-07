(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ResourcesReverse = function ResourcesReverse() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-resources-reverse" },
  React.createElement(
    "title",
    { id: "title" },
    "resources-reverse icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 12.5a2 2 0 1 1 2-2 2 2 0 0 1-2 2zM6 5a2 2 0 1 1 2 2 2 2 0 0 1-2-2zm5 7.5a2 2 0 1 1 2-2 2 2 0 0 1-2 2z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ResourcesReverse;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.ResourcesReverse = ResourcesReverse;
  }
})(this)
