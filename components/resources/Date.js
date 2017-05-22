(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Date = function Date() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-date" },
  React.createElement(
    "title",
    { id: "title" },
    "date icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M15.518 2.326h-1.433V1.257c0-.7-.9-1.271-1.605-1.271s-1.64.57-1.64 1.271v1.069H4.819V1.257c0-.7-.9-1.271-1.605-1.271s-1.64.57-1.64 1.271v1.069H.518a.5.5 0 0 0-.5.5v12.692a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V2.826a.5.5 0 0 0-.5-.5zm-3.577-.749a.521.521 0 0 1 1.042 0v.7a.521.521 0 0 1-1.042 0zm-9.28 0a.521.521 0 0 1 1.042 0v.7a.521.521 0 0 1-1.042 0zm2.8 12.92H1.6v-3.141h3.86zm0-3.876H1.6V7.676h3.86zm0-3.68H1.6V3.883h3.86zM9.937 14.5H6.194v-3.144h3.743zm0-3.876H6.194V7.676h3.743zm0-3.68H6.194V3.883h3.743zm4.5 7.556h-3.765v-3.144h3.762zm0-3.876h-3.765V7.676h3.762zm0-3.68h-3.765V3.883h3.762z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Date;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Date = Date;
  }
})(this)
