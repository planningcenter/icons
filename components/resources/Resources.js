(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Resources = function Resources() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-resources" },
  React.createElement(
    "title",
    { id: "title" },
    "resources icon"
  ),
  React.createElement("circle", { className: "cls-1", cx: "8", cy: "5", r: "2" }),
  React.createElement("circle", { className: "cls-1", cx: "5", cy: "10.5", r: "2" }),
  React.createElement("circle", { className: "cls-1", cx: "11", cy: "10.5", r: "2" }),
  React.createElement("path", { className: "cls-1", d: "M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm.5 14a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Resources;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Resources = Resources;
  }
})(this)
