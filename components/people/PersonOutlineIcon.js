(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var PersonOutlineIcon = function PersonOutlineIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-person-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "person-outline icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M12.839 8.293l-3.024-1.25a3.728 3.728 0 1 0-3.417 0L3.375 8.292a2.415 2.415 0 0 0-1.495 2.24v3.046A2.421 2.421 0 0 0 4.3 16h7.624a2.421 2.421 0 0 0 2.415-2.422v-3.046a2.413 2.413 0 0 0-1.5-2.239zM5.658 3.739A2.449 2.449 0 1 1 8.107 6.2a2.456 2.456 0 0 1-2.449-2.461zm7.4 9.839a1.139 1.139 0 0 1-1.136 1.139H4.3a1.139 1.139 0 0 1-1.136-1.139v-3.046a1.137 1.137 0 0 1 .7-1.054l4.243-1.753 4.245 1.754a1.135 1.135 0 0 1 .7 1.053z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PersonOutlineIcon
  } else {
    global.PersonOutlineIcon = PersonOutlineIcon
  }
})(this)
