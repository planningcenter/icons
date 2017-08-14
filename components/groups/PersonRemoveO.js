(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PersonRemoveO = function PersonRemoveO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-person-remove-o" },
  React.createElement(
    "title",
    { id: "title" },
    "person-remove-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M3.767 15.067a1.821 1.821 0 0 1-1.815-1.822v-2.854A2.2 2.2 0 0 1 3.36 8.343l2.19-.836-.287-.195a3.476 3.476 0 1 1 3.886 0l-.287.195 2.312.882a.558.558 0 0 1-.2 1.08.552.552 0 0 1-.2-.035L7.206 8.072 3.754 9.387a1.077 1.077 0 0 0-.691 1v2.854a.706.706 0 0 0 .7.707h5.165a.558.558 0 0 1 0 1.116zM7.206 2.05A2.372 2.372 0 1 0 9.57 4.421 2.371 2.371 0 0 0 7.206 2.05z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M9.925 12.264a.5.5 0 1 1 0-1.009h3.618a.5.5 0 1 1 0 1.009z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PersonRemoveO;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.PersonRemoveO = PersonRemoveO;
  }
})(this)
