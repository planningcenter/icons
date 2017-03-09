(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var StarClosed = function StarClosed() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-star-closed" },
  React.createElement(
    "title",
    { id: "title" },
    "star-closed icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M15.224 6.318a.623.623 0 0 0-.5-.425l-4.256-.618-1.9-3.856a.65.65 0 0 0-1.121 0l-1.9 3.856-4.256.618a.624.624 0 0 0-.356 1.066l3.08 3-.728 4.241a.625.625 0 0 0 .907.658l3.806-2 3.806 2a.617.617 0 0 0 .291.072.625.625 0 0 0 .616-.73l-.727-4.24 3.08-3a.624.624 0 0 0 .158-.642z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = StarClosed;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.StarClosed = StarClosed;
  }
})(this)
