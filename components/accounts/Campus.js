(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Campus = function Campus() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-campus" },
  React.createElement(
    "title",
    { id: "title" },
    "campus icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M7.88 3.37V.1L.12 2.63v13.26h15.76V5zM5.12 14.79h-2V11.2h2zm1.67 0H6v-4.47H2.27v4.47H1.22V3.43l5.56-1.82v13.18zm1.1 0V4.5l6.9 1.37v5.67h-1v.88h1v.78h-2.23v.88h2.22v.71z", role: "presentation" }),
    React.createElement("path", { d: "M13.74 7.16H9V10h4.73zm-.88 2h-3V8h3zM4.13 4.4a1.38 1.38 0 1 0 1.38 1.38A1.38 1.38 0 0 0 4.13 4.4zm0 1.88a.5.5 0 1 1 .5-.5.5.5 0 0 1-.5.5z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Campus;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Campus = Campus;
  }
})(this)
