(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var SimplePeople = function SimplePeople() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-simple-people" },
  React.createElement(
    "title",
    { id: "title" },
    "simple-people icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("circle", { "class": "cls-1", cx: "12.282", cy: "5.783", r: "2.295" }),
    React.createElement("circle", { "class": "cls-1", cx: "4.949", cy: "4.666", r: "3.06" }),
    React.createElement("path", { "class": "cls-2", d: "M13.6 9.01h-2.64a2.345 2.345 0 0 0-.712.11.338.338 0 0 0-.148.542 3.623 3.623 0 0 1 .844 2.327v.433a.48.48 0 0 0 .48.48h4.187a.359.359 0 0 0 .359-.359v-1.166A2.367 2.367 0 0 0 13.6 9.01zm-4.21 5.151H.509a.479.479 0 0 1-.479-.479v-1.554a3.157 3.157 0 0 1 3.156-3.157h3.527a3.157 3.157 0 0 1 3.157 3.157v1.553a.479.479 0 0 1-.48.48z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = SimplePeople;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.SimplePeople = SimplePeople;
  }
})(this)
