(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var SentEmailIcon = function SentEmailIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-sent-email" },
  React.createElement(
    "title",
    { id: "title" },
    "sent-email icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M6.1 5.866v4.689a1.134 1.134 0 0 0 1.112 1.153h7.775a1.134 1.134 0 0 0 1.113-1.153V5.866a1.134 1.134 0 0 0-1.112-1.153H7.216A1.134 1.134 0 0 0 6.1 5.866zm9.041-.066L11.1 8.309h-.013L7.063 5.816a.162.162 0 0 1 .153-.116h7.775a.163.163 0 0 1 .15.1zm-2.055 2.423l2.068-1.282v2.9zm-5.613 2.5l2.5-1.955.621.385a.931.931 0 0 0 .988 0l.621-.385 2.5 1.955zm-.42-3.767L9.1 8.223l-2.043 1.6zM.1 6.442a.5.5 0 0 0 .493.5h4.076a.5.5 0 0 0 0-1H.6a.5.5 0 0 0-.5.5zm1.257 1.769a.5.5 0 0 0 .493.5h2.819a.5.5 0 0 0 0-1H1.85a.5.5 0 0 0-.493.5zM2.766 9.98a.5.5 0 0 0 .493.5h1.41a.5.5 0 0 0 0-1h-1.41a.5.5 0 0 0-.493.5z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = SentEmailIcon
  } else {
    global.SentEmailIcon = SentEmailIcon
  }
})(this)
