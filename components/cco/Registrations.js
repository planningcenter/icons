(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Registrations = function Registrations() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-registrations", role: "img", className: "symbol symbol-registrations" },
  React.createElement(
    "title",
    { id: "title-registrations" },
    "registrations icon"
  ),
  React.createElement("path", { d: "M7.884 4.072l-6.29 6.883a2.344 2.344 0 0 0-.5 1.077L.67 15.154a.147.147 0 0 0 .177.164l3.066-.677a2.279 2.279 0 0 0 1.018-.591L11.2 7.144a.24.24 0 0 0-.015-.337L8.224 4.058a.24.24 0 0 0-.34.014zm6.236-.5L11.136.868a.239.239 0 0 0-.336.016L8.9 2.963a.239.239 0 0 0 .014.337l2.962 2.747a.24.24 0 0 0 .34-.015l1.922-2.117a.239.239 0 0 0-.018-.338zM6.788 15.369h9a.212.212 0 0 0 .212-.212v-1.282a.211.211 0 0 0-.211-.211h-7.48a.325.325 0 0 0-.253.121z", "fill-rule": "evenodd", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Registrations;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Registrations = Registrations;
  }
})(this)
