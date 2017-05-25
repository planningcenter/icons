(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var People = function People() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-people" },
  React.createElement(
    "title",
    { id: "title" },
    "people icon"
  ),
  React.createElement("path", { "data-name": "path0 fill", className: "cls-1", d: "M11 4.5a3 3 0 1 1-3-3 3 3 0 0 1 3 3zm-.79 3.921a4.5 4.5 0 1 0-4.42 0L3.231 9.487A2 2 0 0 0 2 11.333V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2.667a2 2 0 0 0-1.231-1.846zm2.29 2.913V14a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-2.667a.5.5 0 0 1 .308-.462l4-1.667a.5.5 0 0 1 .385 0l4 1.667a.5.5 0 0 1 .307.462z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = People;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.People = People;
  }
})(this)
