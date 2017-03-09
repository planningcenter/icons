(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var EnvelopeOpenO = function EnvelopeOpenO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-envelope-open-o" },
  React.createElement(
    "title",
    { id: "title" },
    "envelope-open-o icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M16,7.52h0v0a.49.49,0,0,0,0-.17,1,1,0,0,0-.17-.4h0a1,1,0,0,0-.18-.18L9.07.45A1.53,1.53,0,0,0,7,.45L.46,6.68A1.34,1.34,0,0,0,0,7.51V15a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V7.53S16,7.52,16,7.52ZM4.21,11.34l-3.2,3V8.51Zm1.09.35,0,0h0l2.2-2a.61.61,0,0,1,.39-.14.64.64,0,0,1,.38.12l6,5.37H1.73Zm6.51-.29L15,8.6v5.63ZM1.63,6.92l6-5.77a.5.5,0,0,1,.7,0L14,6.52h0l.85.87-3.77,3.35L9,8.84a1.64,1.64,0,0,0-2.05,0l-2,1.8L1.19,7.34l.42-.41Z", style: "fill:#231f20", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EnvelopeOpenO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.EnvelopeOpenO = EnvelopeOpenO;
  }
})(this)
