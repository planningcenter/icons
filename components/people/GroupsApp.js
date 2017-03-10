(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var GroupsApp = function GroupsApp() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-groups-app" },
  React.createElement(
    "title",
    { id: "title" },
    "groups-app icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M9.154 5.031a1.521 1.521 0 0 0-.39.686H7.236a1.53 1.53 0 0 0-2.57-.686 1.546 1.546 0 0 0 0 2.184 1.52 1.52 0 0 0 .684.391v1.531a1.517 1.517 0 0 0-.684.391 1.543 1.543 0 1 0 2.571 1.5h1.528a1.53 1.53 0 0 0 2.57.686 1.536 1.536 0 0 0-.685-2.576V7.606a1.516 1.516 0 0 0 .684-.391 1.543 1.543 0 0 0-2.18-2.184zm.684 4.106a1.493 1.493 0 0 0-1.074 1.077H7.236a1.492 1.492 0 0 0-1.074-1.078v-1.53a1.493 1.493 0 0 0 1.074-1.077h1.528a1.493 1.493 0 0 0 1.074 1.077z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M14 .014H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2zm0 14H2v-12h3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h3z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = GroupsApp;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.GroupsApp = GroupsApp;
  }
})(this)
