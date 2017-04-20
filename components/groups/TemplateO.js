(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var TemplateO = function TemplateO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-template-o" },
  React.createElement(
    "title",
    { id: "title" },
    "template-o icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M14.82 0H1.11A1.15 1.15 0 0 0 0 1.15v13.7A1.15 1.15 0 0 0 1.11 16h13.71A1.15 1.15 0 0 0 16 14.85V1.15A1.15 1.15 0 0 0 14.82 0zM14 5.79H7.67V2H14zM2 2h3.7v12H2zm5.67 12V7.79H14V14z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = TemplateO;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.TemplateO = TemplateO;
  }
})(this)
