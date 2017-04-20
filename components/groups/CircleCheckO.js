(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var CircleCheckO = function CircleCheckO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-circle-check-o" },
  React.createElement(
    "title",
    { id: "title" },
    "circle-check-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement(
      "g",
      { "data-name": "Layer 5" },
      React.createElement("path", { d: "M8 2a6 6 0 1 1-5.91 6A5.95 5.95 0 0 1 8 2M8 .46A7.54 7.54 0 1 0 15.52 8 7.52 7.52 0 0 0 8 .46z", role: "presentation" }),
      React.createElement("path", { d: "M10.76 5.18L7.07 8.89l-1.8-1.82L4.14 8.2l2.93 2.95.05-.05 4.77-4.79-1.13-1.13z", role: "presentation" })
    )
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CircleCheckO;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.CircleCheckO = CircleCheckO;
  }
})(this)
