(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Organization2 = function Organization2() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-organization_2" },
  React.createElement(
    "title",
    { id: "title" },
    "organization_2 icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M14.563 11.54V9.85a2.717 2.717 0 0 0-2.713-2.714H9.058V4.749h3.309V.509h-8.32v4.24h3.511v2.388H4.767A2.717 2.717 0 0 0 2.053 9.85v1.69H.388v4.239h4.239V11.54H3.553V9.85a1.215 1.215 0 0 1 1.214-1.213h2.791v2.9H6.087v4.239h4.239V11.54H9.058v-2.9h2.792a1.215 1.215 0 0 1 1.213 1.21v1.69h-1.277v4.239h4.239V11.54zM5.3 1.759h5.82V3.5H5.3zm-1.92 12.77H1.638V12.79h1.739zm5.7 0H7.337V12.79h1.739zm5.7 0h-1.744V12.79h1.739z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Organization2;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Organization2 = Organization2;
  }
})(this)
