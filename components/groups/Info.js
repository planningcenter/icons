(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Info = function Info() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-info" },
  React.createElement(
    "title",
    { id: "title" },
    "info icon"
  ),
  React.createElement("path", { d: "M10.05 11.5l-.77.33a.57.57 0 0 1-.75-.61l.82-4.29a.71.71 0 0 0-.7-.8H6.18c-.36 0-.47.19-.47.32s.18.24.75.39.36.51.34.7-.44 2.46-.51 2.93-.58 2.36 1.44 2.45a3.27 3.27 0 0 0 2.48-1 .24.24 0 0 0-.16-.42zM8.5 5.62a1.37 1.37 0 1 0-1.37-1.37A1.37 1.37 0 0 0 8.5 5.62zM8 .14A7.86 7.86 0 1 0 15.86 8 7.86 7.86 0 0 0 8 .14zm0 14.53A6.67 6.67 0 1 1 14.67 8 6.67 6.67 0 0 1 8 14.67z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Info;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.Info = Info;
  }
})(this)
