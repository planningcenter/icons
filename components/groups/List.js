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
  { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-list" },
  React.createElement(
    "title",
    { id: "title" },
    "list icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M.24 1.59v2.58h15.49V1.59zm0 7.74h15.49V6.75H.24zm0 5.16h15.49v-2.58H.24z", "fill-rule": "evenodd", "data-name": "Layer 24", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = List;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.List = List;
  }
})(this)
