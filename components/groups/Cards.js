(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Cards = function Cards() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-cards" },
  React.createElement(
    "title",
    { id: "title" },
    "cards icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M9.318.256h6.453v6.453H9.318zm-9 0h6.453v6.453H.318zm0 9h6.453v6.453H.318zm9 0h6.453v6.453H9.318z", "data-name": "Layer 27", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Cards;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.Cards = Cards;
  }
})(this)
