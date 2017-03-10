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
  React.createElement("path", { className: "cls-1", d: "M5.526 10.875h-.877V1.142h-2.4v9.732h-.878a.9.9 0 0 0-.661 1.475l2.077 2.479a.858.858 0 0 0 1.323 0l2.077-2.479a.9.9 0 0 0-.661-1.474zm9.764-6.942l-2.077-2.479a.858.858 0 0 0-1.323 0L9.812 3.933a.9.9 0 0 0 .662 1.474h.878v9.732h2.4V5.407h.878a.9.9 0 0 0 .66-1.474z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Sort;
  } else {
    global.RegistrationsIcon = global.RegistrationsIcon || {};
    global.RegistrationsIcon.Sort = Sort;
  }
})(this)
