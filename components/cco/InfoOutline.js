(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var InfoOutline = function InfoOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-info-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "info-outline icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M6.07,6.27H8.35A.65.65,0,0,1,9,7L8.24,11a.53.53,0,0,0,.69.56l.6-.24a.22.22,0,0,1,.14.39,2.74,2.74,0,0,1-2.18.85c-1.85-.08-1.39-1.83-1.32-2.26s.45-2.51.47-2.69.21-.51-.31-.65-.69-.25-.69-.36S5.74,6.27,6.07,6.27Z", role: "presentation" }),
    React.createElement("circle", { cx: "8.21", cy: "4.54", r: "1.26" }),
    React.createElement("path", { d: "M8,1.25A6.75,6.75,0,1,1,1.25,8,6.76,6.76,0,0,1,8,1.25M8,.12A7.88,7.88,0,1,0,15.88,8,7.88,7.88,0,0,0,8,.12Z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = InfoOutline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.InfoOutline = InfoOutline;
  }
})(this)
