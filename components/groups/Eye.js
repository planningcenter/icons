(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Eye = function Eye() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-eye" },
  React.createElement(
    "title",
    { id: "title" },
    "eye icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M15.79 7.86c-.09-.22-2.26-5.48-7.72-5.48S.26 7.61.16 7.83a.88.88 0 0 0 0 .71C.26 8.76 2.62 14 8.07 14s7.63-5.25 7.72-5.48a.88.88 0 0 0 0-.66zm-7.72 4.38c-3.62 0-5.56-3-6.13-4.05.57-1.05 2.51-4.05 6.13-4.05s5.44 3 5.95 4.05c-.51 1.02-2.33 4.05-5.95 4.05z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M8 5.06a3.12 3.12 0 1 0 3.12 3.12A3.13 3.13 0 0 0 8 5.06zm0 4.5a1.37 1.37 0 1 1 1.34-1.37A1.37 1.37 0 0 1 8 9.56z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Eye;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.Eye = Eye;
  }
})(this)
