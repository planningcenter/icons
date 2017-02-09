(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var ResourcesIcon = function ResourcesIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-resources" },
  React.createElement(
    "title",
    { id: "title" },
    "resources icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 14H2V2h3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h3z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M4.575 5h2.21a.59.59 0 0 1 .59.59v1.82a.59.59 0 0 1-.59.59H4.573a.589.589 0 0 1-.589-.589V5.593A.591.591 0 0 1 4.575 5zm4.641 0h2.21a.59.59 0 0 1 .59.59v1.82a.59.59 0 0 1-.59.59H9.214a.589.589 0 0 1-.589-.589V5.593A.591.591 0 0 1 9.216 5zM4.575 9h2.21a.59.59 0 0 1 .59.59v1.82a.59.59 0 0 1-.59.59H4.573a.589.589 0 0 1-.589-.589V9.593A.591.591 0 0 1 4.575 9zm4.641 0h2.21a.59.59 0 0 1 .59.59v1.82a.59.59 0 0 1-.59.59H9.214a.589.589 0 0 1-.589-.589V9.593A.591.591 0 0 1 9.216 9z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ResourcesIcon
  } else {
    global.ResourcesIcon = ResourcesIcon
  }
})(this)
