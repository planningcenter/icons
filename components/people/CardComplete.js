(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var CardComplete = function CardComplete() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-card-complete" },
  React.createElement(
    "title",
    { id: "title" },
    "card-complete icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M13.584 10l-3.249 3.356a.092.092 0 0 1-.132 0l-2.277-2.343a.092.092 0 0 1 0-.128l.9-.923a.092.092 0 0 1 .132 0L10.2 11.24a.059.059 0 0 0 .085 0l2.243-2.323a.092.092 0 0 1 .132 0l.926.953a.092.092 0 0 1-.002.13z", role: "presentation" }),
    React.createElement("path", { className: "cls-2", d: "M10.715 6.915a4.187 4.187 0 0 1 .624.047 3.991 3.991 0 0 1-.626 7.945 4 4 0 1 1 0-7.992m0-1a5.077 5.077 0 1 0 .774.058 5.168 5.168 0 0 0-.772-.058z", role: "presentation" }),
    React.createElement("path", { className: "cls-2", d: "M5.729 13.922H1.382V1.484H7.3V3.96a.136.136 0 0 0 .04.095.139.139 0 0 0 .1.039h2.506V5.2a5.949 5.949 0 0 1 .767-.055 5.885 5.885 0 0 1 .615.046V3.8a.589.589 0 0 0-.181-.426L7.994.281A.625.625 0 0 0 7.56.1H.613A.624.624 0 0 0 .18.281.6.6 0 0 0 0 .707v14.029a.6.6 0 0 0 .18.426.622.622 0 0 0 .434.176h6.354a5.832 5.832 0 0 1-1.239-1.416z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CardComplete;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.CardComplete = CardComplete;
  }
})(this)
