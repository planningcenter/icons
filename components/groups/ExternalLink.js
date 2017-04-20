(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ExternalLink = function ExternalLink() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-external-link" },
  React.createElement(
    "title",
    { id: "title" },
    "external-link icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M12.43 7.74v6.11H2.22V3.38h5.87c.17 0 0-.23 0-.23L6.35 1.37H1.9A1.68 1.68 0 0 0 .22 3.06v11.11a1.68 1.68 0 0 0 1.68 1.68h10.85a1.68 1.68 0 0 0 1.68-1.68V9.46l-1.82-1.83s-.18-.05-.18.11z", role: "presentation" }),
    React.createElement("path", { d: "M15.14.15H9.26A.5.5 0 0 0 8.9 1l2 2L6 8a1.23 1.23 0 0 0 1.74 1.72l4.94-4.94L14.92 7a.5.5 0 0 0 .86-.36V.8a.65.65 0 0 0-.64-.65z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ExternalLink;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.ExternalLink = ExternalLink;
  }
})(this)
