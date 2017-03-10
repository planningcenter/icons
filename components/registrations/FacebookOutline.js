(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FacebookOutline = function FacebookOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-facebook-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "facebook-outline icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M11.76 4.963a1.276 1.276 0 0 0-1.01-.5H9.443v-.487h.766a1.257 1.257 0 0 0 1.264-1.237l.008-1.5A1.255 1.255 0 0 0 10.216 0H8.79a3.782 3.782 0 0 0-1.882.487 3.137 3.137 0 0 0-1.527 2.9v1.08h-.767a1.271 1.271 0 0 0-.894.364 1.242 1.242 0 0 0-.369.883v1.493a1.256 1.256 0 0 0 1.268 1.237h.762v6.226a1.255 1.255 0 0 0 1.264 1.242H8.17a1.255 1.255 0 0 0 1.264-1.242V8.444h.956a1.271 1.271 0 0 0 1.216-.9l.355-1.48a1.23 1.23 0 0 0-.201-1.101zM10.39 7.2H8.17v7.469H6.645V7.2H4.618V5.708h2.027V3.387a2.007 2.007 0 0 1 2.146-2.151h1.429l-.007 1.494H8.889c-.727 0-.71.607-.71.607v2.372h2.57z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FacebookOutline;
  } else {
    global.RegistrationsIcon = global.RegistrationsIcon || {};
    global.RegistrationsIcon.FacebookOutline = FacebookOutline;
  }
})(this)