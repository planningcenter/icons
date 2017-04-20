(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PersonO = function PersonO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-person-o" },
  React.createElement(
    "title",
    { id: "title" },
    "person-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M12.59 9.45l-2.54-1.18a4.3 4.3 0 0 0 2.13-3.73A4.24 4.24 0 0 0 8 .26a4.24 4.24 0 0 0-4.18 4.28 4.3 4.3 0 0 0 2.12 3.73L3.4 9.45a2.15 2.15 0 0 0-1.22 1.95v3.52a.82.82 0 0 0 .81.83H13a.82.82 0 0 0 .81-.83V11.4a2.15 2.15 0 0 0-1.22-1.95zM8 1.91a2.6 2.6 0 0 1 2.57 2.63 2.57 2.57 0 1 1-5.13 0A2.6 2.6 0 0 1 8 1.91zm4.26 12.28H3.74v-2.62a.49.49 0 0 1 .26-.45L8 9.3l4 1.83a.49.49 0 0 1 .28.44z", "data-name": "Layer 30", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PersonO;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.PersonO = PersonO;
  }
})(this)
