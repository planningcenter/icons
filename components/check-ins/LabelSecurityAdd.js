(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var LabelSecurityAdd = function LabelSecurityAdd() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-label-security-add" },
  React.createElement(
    "title",
    { id: "title" },
    "label-security-add icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M4.114 9.142h.457v2.285h-.457zm1.143 0h.457v2.285h-.457zm2.057 0h.457v2.285h-.457zm-2.514 0h.229v2.285H4.8zm1.142 0h.229v2.285h-.229zm.457 0h.229v2.285h-.229zm.458 0h.229v2.285h-.229zm1.142 0h.229v2.285h-.229zm.457 0h.229v2.285h-.229zm.457 0h.457v2.285h-.457zm2.057 0h.457v2.285h-.457zm1.6 0h.457v2.285h-.457zm.686 0h.457v2.285h-.457zm-3.657 0h.229v2.285h-.229zm.457 0h.229v2.285h-.229zm.457 0h.229v2.285h-.229zm1.143 0h.229v2.285h-.229zm.457 0h.229v2.285h-.229zm1.647-6.358a2.2 2.2 0 1 0 2.2 2.2 2.2 2.2 0 0 0-2.2-2.2zm1.324 2.527h-.994v.995h-.66v-.995h-.995v-.659h.995v-.995h.659v.995h.995z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M11.092 4.981a2.643 2.643 0 0 1 .042-.41H.584a.911.911 0 0 1 .787-.457h9.877a2.645 2.645 0 0 1 .209-.457H1.371A1.371 1.371 0 0 0 0 5.028V9.6a.453.453 0 0 0 .129.319l2.285 2.286a.457.457 0 0 0 .323.134h10.97a1.371 1.371 0 0 0 1.371-1.371V7.283a2.636 2.636 0 0 1-1.324.366 2.671 2.671 0 0 1-2.662-2.668zm-8.349 6.9L.457 9.6h1.524a.762.762 0 0 1 .762.762zm11.885-.914a.915.915 0 0 1-.914.914H3.2v-1.52a1.22 1.22 0 0 0-1.219-1.219H.457v-.457h14.17z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = LabelSecurityAdd;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.LabelSecurityAdd = LabelSecurityAdd;
  }
})(this)
