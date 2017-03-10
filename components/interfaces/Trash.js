(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Trash = function Trash() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-trash" },
  React.createElement(
    "title",
    { id: "title" },
    "trash icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M3.26 14.8a1.142 1.142 0 0 0 1.13 1.166H12a1.142 1.142 0 0 0 1.13-1.166l.439-10.05H2.839zm7.212-7.628a.513.513 0 1 1 1.012 0v6.38a.513.513 0 1 1-1.012 0zm-2.793 0a.513.513 0 1 1 1.012 0v6.38a.513.513 0 1 1-1.012 0zm-2.764 0a.513.513 0 1 1 1.012 0v6.38a.513.513 0 1 1-1.012 0zm8.853-5.251h-3.257V.582c0-.318-.152-.548-.472-.548h-3.7a.5.5 0 0 0-.506.548v1.339H2.636a.528.528 0 0 0-.523.583v.613c0 .336.2.689.523.689h11.149c.32 0 .489-.371.489-.689V2.5c-.017-.332-.185-.579-.506-.579zm-4.182 0h-2.8V.978h2.8z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Trash;
  } else {
    global.InterfacesIcon = global.InterfacesIcon || {};
    global.InterfacesIcon.Trash = Trash;
  }
})(this)
