(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Share = function Share() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-share" },
  React.createElement(
    "title",
    { id: "title" },
    "share icon"
  ),
  React.createElement("path", { "data-name": "path0 fill", className: "cls-1", d: "M7.47.22a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1-1.06 1.06L8.75 2.561v7.689a.75.75 0 0 1-1.5 0V2.561L6.03 3.78a.75.75 0 0 1-1.06-1.06z", role: "presentation" }),
  React.createElement("path", { "data-name": "path1 fill", className: "cls-1", d: "M4.5 6.5A.5.5 0 0 0 4 7v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5H11A.75.75 0 1 1 11 5h.5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2H5a.75.75 0 0 1 0 1.5z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Share;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Share = Share;
  }
})(this)
