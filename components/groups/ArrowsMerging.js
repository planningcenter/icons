(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ArrowsMerging = function ArrowsMerging() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-arrows-merging" },
  React.createElement(
    "title",
    { id: "title" },
    "arrows-merging icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M11.709 9H7.391a6.488 6.488 0 0 1-6.48-6.48V1.162a1 1 0 1 1 2 0V2.52A4.485 4.485 0 0 0 7.391 7h4.318a1 1 0 0 1 0 2z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M1.911 15.838a1 1 0 0 1-1-1V13.48A6.488 6.488 0 0 1 7.391 7h5.041a1 1 0 0 1 0 2H7.391a4.485 4.485 0 0 0-4.48 4.48v1.357a1 1 0 0 1-1 1.001z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M10.229 13.063a1 1 0 0 1-.707-1.707L12.877 8 9.522 4.645a1 1 0 1 1 1.414-1.415L15 7.293a1 1 0 0 1 0 1.414l-4.064 4.063a1 1 0 0 1-.707.293z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ArrowsMerging;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.ArrowsMerging = ArrowsMerging;
  }
})(this)
