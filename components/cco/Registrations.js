(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Registrations = function Registrations() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-registrations" },
  React.createElement(
    "title",
    { id: "title" },
    "registrations icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M7.88,4.07,1.59,11A2.34,2.34,0,0,0,1.09,12L.67,15.15a.15.15,0,0,0,.18.16l3.07-.68a2.28,2.28,0,0,0,1-.59L11.2,7.14a.24.24,0,0,0,0-.34l-3-2.75A.24.24,0,0,0,7.88,4.07Zm6.24-.5-3-2.71a.24.24,0,0,0-.34,0L8.9,3a.24.24,0,0,0,0,.34l3,2.75a.24.24,0,0,0,.34,0l1.92-2.12A.24.24,0,0,0,14.12,3.58ZM6.79,15.37h9a.21.21,0,0,0,.21-.21V13.88a.21.21,0,0,0-.21-.21H8.31a.32.32,0,0,0-.25.12Z", style: "fill-rule:evenodd", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Registrations;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Registrations = Registrations;
  }
})(this)
