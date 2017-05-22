(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var CloseDisc = function CloseDisc() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-close-disc" },
  React.createElement(
    "title",
    { id: "title" },
    "close-disc icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M8.036.234A7.766 7.766 0 1 0 15.8 8 7.766 7.766 0 0 0 8.036.234zm4.484 10.628a.257.257 0 0 1 0 .363l-1.259 1.259a.257.257 0 0 1-.363 0L8.036 9.622l-2.862 2.862a.257.257 0 0 1-.363 0l-1.259-1.259a.257.257 0 0 1 0-.363L6.414 8 3.552 5.138a.257.257 0 0 1 0-.363l1.259-1.259a.257.257 0 0 1 .363 0l2.862 2.862L10.9 3.516a.257.257 0 0 1 .363 0l1.257 1.259a.257.257 0 0 1 0 .363L9.658 8z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CloseDisc;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.CloseDisc = CloseDisc;
  }
})(this)
