(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var LogoutO = function LogoutO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-logout-o" },
  React.createElement(
    "title",
    { id: "title" },
    "logout-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M12.629 4.463l-.682.694 2.143 2.105H6.408v.971h7.786l-2.217 2.238.691.685 3.34-3.373-3.379-3.32z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M9.922 12.409l-.078.069-.046.035a5.35 5.35 0 0 1-.177.123 6.069 6.069 0 0 1-.676.383 5.159 5.159 0 0 1-2.257.554A5.63 5.63 0 0 1 1 7.877a5.453 5.453 0 0 1 1.948-4.364 6.064 6.064 0 0 1 3.74-1.36 5.062 5.062 0 0 1 2.217.572 6.694 6.694 0 0 1 .7.4c.072.046.136.09.189.129l.058.042.079.062.6-.769-.08-.062a5.365 5.365 0 0 0-.312-.217 7.773 7.773 0 0 0-.806-.456 6.024 6.024 0 0 0-2.645-.674A7.061 7.061 0 0 0 2.33 2.764a6.393 6.393 0 0 0-2.3 5.113 6.591 6.591 0 0 0 6.654 6.668 6.12 6.12 0 0 0 2.682-.652 7.038 7.038 0 0 0 .786-.446c.121-.081.231-.159.3-.216l.078-.062-.546-.679z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = LogoutO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.LogoutO = LogoutO;
  }
})(this)
