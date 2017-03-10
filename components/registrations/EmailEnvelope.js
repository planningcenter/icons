(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var EmailEnvelope = function EmailEnvelope() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-email-envelope" },
  React.createElement(
    "title",
    { id: "title" },
    "email-envelope icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M.86 4.635L7.3 7.761a1.072 1.072 0 0 0 .818 0l6.948-3.433a.358.358 0 0 0 .2-.321 1 1 0 0 0-1-1H1.67A1.016 1.016 0 0 0 .659 4.018v.3a.358.358 0 0 0 .201.317zm13.761 1.5l-5.867 2.9a2.474 2.474 0 0 1-2.048.006L1.3 6.427a.448.448 0 0 0-.643.406v4.657a.978.978 0 0 0 .973.978h12.554a1.089 1.089 0 0 0 1.083-1.088V6.537a.448.448 0 0 0-.646-.404z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EmailEnvelope;
  } else {
    global.RegistrationsIcon = global.RegistrationsIcon || {};
    global.RegistrationsIcon.EmailEnvelope = EmailEnvelope;
  }
})(this)
