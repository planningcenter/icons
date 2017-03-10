(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var CardRemoved = function CardRemoved() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-card-removed" },
  React.createElement(
    "title",
    { id: "title" },
    "card-removed icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M10.815 6.915a4.187 4.187 0 0 1 .624.047 3.991 3.991 0 0 1-.626 7.945 4 4 0 1 1 0-7.992m0-1a5.077 5.077 0 1 0 .774.058 5.168 5.168 0 0 0-.772-.058z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M5.829 13.922H1.481V1.484H7.4V3.96a.136.136 0 0 0 .04.095.139.139 0 0 0 .1.039h2.507V5.2a5.949 5.949 0 0 1 .767-.055 5.885 5.885 0 0 1 .615.046V3.8a.589.589 0 0 0-.181-.426L8.094.281A.625.625 0 0 0 7.66.1H.713a.624.624 0 0 0-.434.181A.6.6 0 0 0 .1.707v14.029a.6.6 0 0 0 .18.426.622.622 0 0 0 .434.176h6.354a5.832 5.832 0 0 1-1.239-1.416z", role: "presentation" }),
    React.createElement("path", { className: "cls-2", d: "M13.122 9.6l-1-1a.133.133 0 0 0-.188 0l-1.122 1.121L9.693 8.6a.133.133 0 0 0-.188 0l-1 1a.133.133 0 0 0 0 .188l1.119 1.119L8.5 12.031a.133.133 0 0 0 0 .188l1 1a.133.133 0 0 0 .188 0l1.124-1.119 1.119 1.119a.133.133 0 0 0 .188 0l1-1a.133.133 0 0 0 0-.188L12 10.911l1.119-1.119a.133.133 0 0 0 .003-.192z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CardRemoved;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.CardRemoved = CardRemoved;
  }
})(this)
