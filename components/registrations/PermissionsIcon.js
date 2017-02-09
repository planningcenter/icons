(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var PermissionsIcon = function PermissionsIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-permissions" },
  React.createElement(
    "title",
    { id: "title" },
    "permissions icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M12.116 6.069H7.142V3.693a1.27 1.27 0 1 1 2.54 0v.528a.7.7 0 1 0 1.4 0v-.528a2.67 2.67 0 1 0-5.341 0v2.376H4.707a1.948 1.948 0 0 0-1.945 1.945v5.86a1.948 1.948 0 0 0 1.945 1.946h7.409a1.948 1.948 0 0 0 1.945-1.945V8.014a1.948 1.948 0 0 0-1.945-1.945zm.545 7.806a.545.545 0 0 1-.545.545H4.707a.545.545 0 0 1-.545-.545V8.014a.545.545 0 0 1 .545-.545h7.409a.545.545 0 0 1 .545.545z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M9.484 10.479a1.072 1.072 0 1 0-1.562.939l-.327.793a.48.48 0 0 0 .444.663h.746a.48.48 0 0 0 .444-.663l-.329-.793a1.062 1.062 0 0 0 .584-.939z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PermissionsIcon
  } else {
    global.PermissionsIcon = PermissionsIcon
  }
})(this)
