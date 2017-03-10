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
  React.createElement("path", { "class": "cls-1", d: "M15.955 7.516v-.017a.494.494 0 0 0-.029-.173 1 1 0 0 0-.166-.4l-.014-.014a1 1 0 0 0-.178-.179L9.072.45a1.531 1.531 0 0 0-2.114 0L.463 6.681a1.345 1.345 0 0 0-.45.83v7.465a1 1 0 0 0 1 1h13.946a1 1 0 0 0 1-1V7.529s-.004-.008-.004-.013zm-11.74 3.821l-3.2 2.951V8.509zm1.085.353c.011-.011.026-.015.036-.027l.008-.015 2.2-2.03a.611.611 0 0 1 .387-.139.645.645 0 0 1 .389.121l5.972 5.372H1.732zm6.505-.287l3.152-2.8v5.633zM1.63 6.923l6.033-5.769a.5.5 0 0 1 .7 0l5.626 5.361h-.015l.854.869-3.772 3.348-2.1-1.894a1.639 1.639 0 0 0-2.05.021l-1.954 1.8-3.765-3.322.42-.414z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EnvelopeOpenO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.EnvelopeOpenO = EnvelopeOpenO;
  }
})(this)
