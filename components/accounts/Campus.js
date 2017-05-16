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
    React.createElement("path", { className: "cls-1", d: "M7.884 3.374V.1L.119 2.633v13.254h15.762V4.962zM5.116 14.786H3.154V11.2h1.962zm1.667 0H6v-4.471H2.273v4.471H1.22V3.431l5.563-1.818v13.173zm1.1 0V4.5l6.9 1.37v5.675h-.964v.881h.964v.774h-2.22v.881h2.217v.708z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M13.74 7.164H9.011v2.858h4.729zm-.881 1.977H9.892v-1.1h2.967zM4.135 4.4a1.379 1.379 0 1 0 1.379 1.377A1.381 1.381 0 0 0 4.135 4.4zm0 1.878a.5.5 0 1 1 .5-.5.5.5 0 0 1-.5.497z", role: "presentation" })
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
