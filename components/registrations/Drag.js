(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Drag = function Drag() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-drag" },
  React.createElement(
    "title",
    { id: "title" },
    "drag icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M14.412 7.382l-1.648-1.415a.593.593 0 0 0-.98.45v.748h-3.14V3.977h.7A.593.593 0 0 0 9.794 3L8.38 1.349a.593.593 0 0 0-.9 0L6.065 3a.593.593 0 0 0 .45.98h.7v3.182h-3.14v-.744a.593.593 0 0 0-.98-.45L1.447 7.382a.593.593 0 0 0 0 .9L3.095 9.7a.593.593 0 0 0 .98-.45v-.662h3.14v3.1h-.7a.593.593 0 0 0-.45.98l1.414 1.648a.593.593 0 0 0 .9 0l1.414-1.648a.593.593 0 0 0-.45-.98h-.7V8.592h3.14v.651a.593.593 0 0 0 .98.45l1.648-1.414a.593.593 0 0 0 .001-.897z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Drag;
  } else {
    global.RegistrationsIcon = global.RegistrationsIcon || {};
    global.RegistrationsIcon.Drag = Drag;
  }
})(this)
