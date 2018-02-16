(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Template = function Template() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-template", role: "img", className: "symbol symbol-template" },
  React.createElement(
    "title",
    { id: "title-template" },
    "template icon"
  ),
  React.createElement("path", { d: "M15 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zM6 14H2V7h4zm8 0H7V7h7zm0-8H2V2h12z", "fill-rule": "evenodd", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Template;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Template = Template;
  }
})(this)
