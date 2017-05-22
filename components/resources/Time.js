(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Time = function Time() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-time" },
  React.createElement(
    "title",
    { id: "title" },
    "time icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M8 0a8.007 8.007 0 1 0 8 8.007A8 8 0 0 0 8 0zm4.684 12.7a6.627 6.627 0 0 1-9.368-9.382 6.627 6.627 0 0 1 9.368 9.382z", role: "presentation" }),
  React.createElement("path", { className: "cls-1", d: "M11.163 10.865a.924.924 0 0 0 .459-1.726L8.856 7.557V3.474a.923.923 0 1 0-1.846 0v4.62a.924.924 0 0 0 .465.8l3.232 1.848a.908.908 0 0 0 .456.122z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Time;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Time = Time;
  }
})(this)
