(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Email = function Email() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-email" },
  React.createElement(
    "title",
    { id: "title" },
    "email icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M13.2 3.735H2.988A1.454 1.454 0 0 0 1.527 5.18v5.871a1.454 1.454 0 0 0 1.461 1.443H13.2a1.454 1.454 0 0 0 1.461-1.443V5.18A1.454 1.454 0 0 0 13.2 3.735zM5.49 8.13l-2.715 2.023V6.525zm1.155.683l.817.483a1.277 1.277 0 0 0 1.3 0l.816-.482 3.286 2.448h-9.5zm4.085-.683l2.682-1.586v3.584zM2.988 4.968H13.2a.2.2 0 0 1 .19.155L8.1 8.238 2.8 5.107a.2.2 0 0 1 .188-.139z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Email;
  } else {
    global.RegistrationsIcon = global.RegistrationsIcon || {};
    global.RegistrationsIcon.Email = Email;
  }
})(this)
