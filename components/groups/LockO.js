(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var LockO = function LockO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-lock-o" },
  React.createElement(
    "title",
    { id: "title" },
    "lock-o icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M12.937 6.983h-.025v-1.06a4.943 4.943 0 0 0-9.886 0v1.06H3a1.807 1.807 0 0 0-1.8 1.805v5.453A1.807 1.807 0 0 0 3 16.046h9.936a1.807 1.807 0 0 0 1.805-1.8V8.788a1.807 1.807 0 0 0-1.804-1.805zm-8.162-1.06a3.193 3.193 0 0 1 6.386 0v1.06H4.775zm8.216 8.318a.055.055 0 0 1-.055.055l-9.991-.055L3 8.733l9.991.055z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = LockO;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.LockO = LockO;
  }
})(this)
