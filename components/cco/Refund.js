(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Refund = function Refund() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-refund" },
  React.createElement(
    "title",
    { id: "title" },
    "refund icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M15.67,6A7.95,7.95,0,1,0,.32,10.07a7.78,7.78,0,0,0,2.59,4v0L2.19,15.2a.26.26,0,0,0,.19.4l4.75.32a.26.26,0,0,0,.25-.37l-2.1-4.28a.25.25,0,0,0-.44,0l-.62.94a5.55,5.55,0,0,1-1.67-2.7,5.63,5.63,0,1,1,7.22,3.89.24.24,0,0,0-.16.28L10,15.42a.24.24,0,0,0,.3.18A8,8,0,0,0,15.67,6ZM10.1,9.14A2.3,2.3,0,0,0,10,8.24a1.52,1.52,0,0,0-.37-.55,6.38,6.38,0,0,0-.83-.56,5.83,5.83,0,0,1-.86-.59A.74.74,0,0,1,7.75,6a.63.63,0,0,1,.07-.34A.24.24,0,0,1,8,5.56a.23.23,0,0,1,.24.13,1.19,1.19,0,0,1,.06.47v.21a.16.16,0,0,0,.13.15l1.29,0a.15.15,0,0,0,.18-.15c0-.14,0-.15,0-.19A1.59,1.59,0,0,0,9.57,5.1a1.73,1.73,0,0,0-1.1-.5V4.3a.2.2,0,0,0-.2-.2H7.93a.2.2,0,0,0-.2.2v.31a2,2,0,0,0-1.21.5,1.53,1.53,0,0,0-.4,1.12,2,2,0,0,0,.19.89,1.78,1.78,0,0,0,.45.61,11.09,11.09,0,0,0,1,.67,1.13,1.13,0,0,1,.51.5,2.78,2.78,0,0,1,.07.77.55.55,0,0,1-.08.32.28.28,0,0,1-.24.11.22.22,0,0,1-.24-.16,3.72,3.72,0,0,1,0-.8V8.89a.16.16,0,0,0-.13-.15l-1.28,0a.15.15,0,0,0-.18.15v.19a2,2,0,0,0,.48,1.5,1.9,1.9,0,0,0,1.11.49v.42a.2.2,0,0,0,.2.2h.34a.2.2,0,0,0,.2-.2v-.4a1.87,1.87,0,0,0,1.23-.6A2,2,0,0,0,10.1,9.14Z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Refund;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Refund = Refund;
  }
})(this)
