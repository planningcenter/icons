(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Phone = function Phone() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-phone" },
  React.createElement(
    "title",
    { id: "title" },
    "phone icon"
  ),
  React.createElement("path", { d: "M1.89 5.8A26.79 26.79 0 0 0 9 14.42l1.08.86a1.76 1.76 0 0 0 2.22 0l1.89-1.57.31-.26a1.31 1.31 0 0 0 .17-1.83L13.2 9.84a1.29 1.29 0 0 0-1.82-.17l-1.84 1.51a26.79 26.79 0 0 1-4.37-5.32L7 4.34a1.31 1.31 0 0 0 .17-1.83L5.72.74A1.29 1.29 0 0 0 3.89.57l-.31.25-1.89 1.57a1.77 1.77 0 0 0-.44 2.18z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Phone;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.Phone = Phone;
  }
})(this)
