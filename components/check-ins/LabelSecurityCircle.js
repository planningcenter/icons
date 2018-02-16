(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var LabelSecurityCircle = function LabelSecurityCircle() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-label-security-circle", role: "img", className: "symbol symbol-label-security-circle" },
  React.createElement(
    "title",
    { id: "title-label-security-circle" },
    "label-security-circle icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M4.114 9.142h.457v2.285h-.457zm1.143 0h.457v2.285h-.457zm2.057 0h.457v2.285h-.457zm-2.514 0h.229v2.285H4.8zm1.142 0h.229v2.285h-.229zm.457 0h.229v2.285h-.229zm.458 0h.229v2.285h-.229zm1.142 0h.229v2.285h-.229zm.457 0h.229v2.285h-.229zm.457 0h.457v2.285h-.457zm2.057 0h.457v2.285h-.457zm1.6 0h.457v2.285h-.457zm.686 0h.457v2.285h-.457zm-3.657 0h.229v2.285h-.229zm.457 0h.229v2.285h-.229zm.457 0h.229v2.285h-.229zm1.143 0h.229v2.285h-.229zm.457 0h.229v2.285h-.229zm1.647-6.358a2.2 2.2 0 1 0 2.2 2.2 2.2 2.2 0 0 0-2.2-2.2z", role: "presentation" }),
    React.createElement("path", { d: "M11.092 4.981a2.649 2.649 0 0 1 .041-.41H.584a.911.911 0 0 1 .787-.457h9.878a2.657 2.657 0 0 1 .208-.457H1.371A1.371 1.371 0 0 0 0 5.028V9.6h.005a.453.453 0 0 0 .129.319l2.285 2.286a.461.461 0 0 0 .324.134h10.97a1.371 1.371 0 0 0 1.371-1.372V7.283a2.63 2.63 0 0 1-1.324.366 2.671 2.671 0 0 1-2.668-2.668zm-8.349 6.9L.457 9.6h1.524a.762.762 0 0 1 .762.762zm11.884-.915a.916.916 0 0 1-.914.915H3.2v-1.52a1.22 1.22 0 0 0-1.219-1.219H.457v-.457h14.17z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = LabelSecurityCircle;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.LabelSecurityCircle = LabelSecurityCircle;
  }
})(this)
