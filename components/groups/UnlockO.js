(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var UnlockO = function UnlockO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-unlock-o" },
  React.createElement(
    "title",
    { id: "title" },
    "unlock-o icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M13.063 7.092h-.025v-2.1a4.943 4.943 0 0 0-9.753-1.144l1.7.4a3.193 3.193 0 0 1 6.3.739v2.1H3.127A1.807 1.807 0 0 0 1.322 8.9v5.45a1.807 1.807 0 0 0 1.805 1.806h9.936a1.807 1.807 0 0 0 1.8-1.806V8.9a1.807 1.807 0 0 0-1.8-1.808zm.055 7.258a.055.055 0 0 1-.055.056l-9.991-.056.055-5.508 9.991.056z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = UnlockO;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.UnlockO = UnlockO;
  }
})(this)
