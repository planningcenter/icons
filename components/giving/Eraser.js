(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Eraser = function Eraser() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-eraser" },
  React.createElement(
    "title",
    { id: "title" },
    "eraser icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("rect", { "class": "cls-1", x: ".106", y: "14.674", width: "14.66", height: "1.333", rx: ".184", ry: ".184" }),
    React.createElement("path", { "class": "cls-1", d: "M15.832 5.861L10.776.774a.213.213 0 0 0-.3 0l-9.347 9.38a.213.213 0 0 0 0 .3l3.449 3.491a.213.213 0 0 0 .151.063h3.213a.213.213 0 0 0 .151-.063l7.739-7.784a.213.213 0 0 0 0-.3zm-8.169 7.1a.164.164 0 0 1-.117.049H5.121A.164.164 0 0 1 5 12.96l-2.5-2.535a.164.164 0 0 1 0-.231l4.2-4.229 3.945 3.968z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Eraser;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.Eraser = Eraser;
  }
})(this)
