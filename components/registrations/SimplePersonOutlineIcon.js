(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var SimplePersonOutlineIcon = function SimplePersonOutlineIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-simple-person-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "simple-person-outline icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M12.178 9.274L9.866 8.231a3.8 3.8 0 1 0-3.732 0L3.822 9.274a1.891 1.891 0 0 0-1.114 1.72V14.1a.731.731 0 0 0 .733.729h9.117a.731.731 0 0 0 .733-.729v-3.106a1.891 1.891 0 0 0-1.113-1.72zM8 2.619a2.323 2.323 0 1 1-2.333 2.322A2.331 2.331 0 0 1 8 2.619zm3.826 10.754H4.174v-2.379a.43.43 0 0 1 .253-.391L8 8.991l3.573 1.609a.43.43 0 0 1 .253.391z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = SimplePersonOutlineIcon
  } else {
    global.SimplePersonOutlineIcon = SimplePersonOutlineIcon
  }
})(this)
