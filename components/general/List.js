(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var List = function List() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-list", role: "img", className: "symbol symbol-list" },
  React.createElement(
    "title",
    { id: "title-list" },
    "list icon"
  ),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M7 5.005h8m-8 4h8m-8 4h8M3 5h2M3 9h2m-2 4h2", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = List;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.List = List;
  }
})(this)
