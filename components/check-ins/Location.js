(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Location = function Location() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-location" },
  React.createElement(
    "title",
    { id: "title" },
    "location icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M8 0a5.547 5.547 0 0 0-5.547 5.547v.2a5.535 5.535 0 0 0 .318 1.666c.93 3.057 3.625 6.845 4.737 8.328a.609.609 0 0 0 .976 0c1.111-1.482 3.806-5.27 4.736-8.327a5.523 5.523 0 0 0 .318-1.666q0-.1.005-.2A5.547 5.547 0 0 0 8 0zm0 8.264a2.717 2.717 0 1 1 2.717-2.717A2.717 2.717 0 0 1 8 8.264z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Location;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Location = Location;
  }
})(this)
