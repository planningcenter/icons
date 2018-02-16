(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ToCloudArrow = function ToCloudArrow() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-to-cloud-arrow", role: "img", className: "symbol symbol-to-cloud-arrow" },
  React.createElement(
    "title",
    { id: "title-to-cloud-arrow" },
    "to-cloud-arrow icon"
  ),
  React.createElement("path", { d: "M14.271 7.005h-.239A.032.032 0 0 1 14 6.973a3.985 3.985 0 0 0-6.983-2.609 3.467 3.467 0 0 0-5 2.964.03.03 0 0 1-.017.026A3.489 3.489 0 0 0 .025 10.93a3.628 3.628 0 0 0 3.659 3.075h3.9V10.8H6l3-3.795 3 3.795h-1.586v3.207H14.5a3.5 3.5 0 0 0 3.5-3.66 3.655 3.655 0 0 0-3.729-3.342z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ToCloudArrow;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.ToCloudArrow = ToCloudArrow;
  }
})(this)
