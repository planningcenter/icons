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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-envelope-open-o", role: "img", className: "symbol symbol-envelope-open-o" },
  React.createElement(
    "title",
    { id: "title-envelope-open-o" },
    "envelope-open-o icon"
  ),
  React.createElement("path", { d: "M15.955 7.516v-.017a.488.488 0 0 0-.029-.173 1 1 0 0 0-.166-.4l-.014-.013a.968.968 0 0 0-.177-.179L9.072.45a1.531 1.531 0 0 0-2.114 0L.463 6.681a1.343 1.343 0 0 0-.45.831v7.465a1 1 0 0 0 1 1h13.946a1 1 0 0 0 1-1V7.529a.056.056 0 0 0-.004-.013zm-11.74 3.821l-3.2 2.951V8.509zm1.085.353c.012-.011.026-.015.037-.027l.008-.014 2.2-2.03a.613.613 0 0 1 .388-.139.642.642 0 0 1 .382.125l5.972 5.372H1.732zm6.506-.287l3.152-2.8v5.633zM1.63 6.923l6.033-5.769a.5.5 0 0 1 .705 0l5.626 5.361h-.015l.854.869-3.772 3.348-2.105-1.894a1.64 1.64 0 0 0-2.051.021l-1.953 1.8-3.765-3.322.42-.414z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EnvelopeOpenO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.EnvelopeOpenO = EnvelopeOpenO;
  }
})(this)
