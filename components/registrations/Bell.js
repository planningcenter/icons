(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Bell = function Bell() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-bell" },
  React.createElement(
    "title",
    { id: "title" },
    "bell icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M14.885 11.5l-1.822-2.068v-3.1A4.8 4.8 0 0 0 8.18 1.623 4.8 4.8 0 0 0 3.3 6.332v3.1L1.474 11.5a1.194 1.194 0 0 0-.188 1.324 1.276 1.276 0 0 0 1.167.719h3.639a2.256 2.256 0 0 0 4.174 0h3.639a1.276 1.276 0 0 0 1.167-.719 1.193 1.193 0 0 0-.187-1.324zm-.732.914a.264.264 0 0 1-.247.152H2.453a.264.264 0 0 1-.247-.152.248.248 0 0 1 .04-.281l1.943-2.2a.479.479 0 0 0 .121-.316V6.332A3.807 3.807 0 0 1 8.18 2.6a3.807 3.807 0 0 1 3.87 3.731v3.28a.479.479 0 0 0 .121.316l1.943 2.2a.248.248 0 0 1 .039.284z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Bell;
  } else {
    global.RegistrationsIcon = global.RegistrationsIcon || {};
    global.RegistrationsIcon.Bell = Bell;
  }
})(this)
