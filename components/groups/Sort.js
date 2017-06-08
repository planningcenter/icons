(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Sort = function Sort() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-sort" },
  React.createElement(
    "title",
    { id: "title" },
    "sort icon"
  ),
  React.createElement("path", { d: "M12.794 9.537l-4.556 5.614a.255.255 0 0 1-.4 0L3.287 9.537a.255.255 0 0 1 .2-.416H12.6a.255.255 0 0 1 .194.416zM3.287 6.89l4.555-5.614a.255.255 0 0 1 .4 0l4.552 5.614a.255.255 0 0 1-.2.416H3.485a.255.255 0 0 1-.198-.416z", "data-name": "Layer 1", fill: "#231f20", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Sort;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.Sort = Sort;
  }
})(this)
