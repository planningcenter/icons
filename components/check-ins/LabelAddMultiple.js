(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var LabelAddMultiple = function LabelAddMultiple() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-label-add-multiple" },
  React.createElement(
    "title",
    { id: "title" },
    "label-add-multiple icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M1.993 9.6H.006l2.741 2.742v-1.989a.755.755 0 0 0-.754-.753zM13.76 2.785a2.2 2.2 0 1 0 2.2 2.2 2.2 2.2 0 0 0-2.2-2.2zm1.324 2.527h-.994v.995h-.66v-.995h-.995v-.66h.995v-.994h.659v.995h.995z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M11.092 4.982a2.636 2.636 0 0 1 .365-1.323H1.371A1.371 1.371 0 0 0 0 5.03v4.112h1.993A1.211 1.211 0 0 1 3.2 10.353v1.988h10.51a1.371 1.371 0 0 0 1.371-1.371V7.284a2.636 2.636 0 0 1-1.324.366 2.671 2.671 0 0 1-2.665-2.668z", role: "presentation" }),
    React.createElement("path", { className: "cls-2", d: "M2.217 2.785a1.362 1.362 0 0 0-1.006.449h10.608a2.688 2.688 0 0 1 .545-.449zm13.292 4.136v4.2a1.362 1.362 0 0 0 .448-1V6.378a2.688 2.688 0 0 1-.448.543z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = LabelAddMultiple;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.LabelAddMultiple = LabelAddMultiple;
  }
})(this)
