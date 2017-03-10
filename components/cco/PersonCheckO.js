(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PersonCheckO = function PersonCheckO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-person-check-o" },
  React.createElement(
    "title",
    { id: "title" },
    "person-check-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M11.749 14.605l-.519-.446-1.371-1.371a.657.657 0 0 1 .93-.93l.924.924 2.447-2.447a.657.657 0 0 1 .93.93zM6.714 7.936a3.914 3.914 0 1 1 3.914-3.914 3.918 3.918 0 0 1-3.914 3.914zm0-6.512a2.6 2.6 0 1 0 2.6 2.6 2.6 2.6 0 0 0-2.6-2.6z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M8.634 15.891H2.88a2.065 2.065 0 0 1-2.062-2.062v-3.172a2.485 2.485 0 0 1 1.594-2.311l4.3-1.633 4.44 1.687a.657.657 0 1 1-.466 1.229l-3.972-1.51-3.835 1.456a1.165 1.165 0 0 0-.747 1.082v3.172a.749.749 0 0 0 .748.747h5.754a.657.657 0 1 1 0 1.315z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PersonCheckO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.PersonCheckO = PersonCheckO;
  }
})(this)
