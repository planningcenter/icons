(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var ReceivedEmailIcon = function ReceivedEmailIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-received-email" },
  React.createElement(
    "title",
    { id: "title" },
    "received-email icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M8.887 4.713H1.112A1.134 1.134 0 0 0 0 5.866v4.689a1.134 1.134 0 0 0 1.112 1.153h7.775A1.134 1.134 0 0 0 10 10.555V5.866a1.134 1.134 0 0 0-1.113-1.153zM1.112 5.7h7.775a.162.162 0 0 1 .153.119l-4.022 2.49h-.012L.962 5.8a.163.163 0 0 1 .15-.1zM.95 9.839v-2.9l2.067 1.284zm.445.885L3.9 8.769l.621.385a.931.931 0 0 0 .988 0l.621-.385 2.5 1.955zm7.656-.9l-2.043-1.6L9.05 6.957zm6.457-3.877h-4.074a.5.5 0 0 0 0 1h4.073a.5.5 0 0 0 0-1zm-1.255 1.764h-2.819a.5.5 0 0 0 0 1h2.819a.5.5 0 0 0 0-1zM12.844 9.48h-1.41a.5.5 0 0 0 0 1h1.409a.5.5 0 0 0 0-1z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ReceivedEmailIcon
  } else {
    global.ReceivedEmailIcon = ReceivedEmailIcon
  }
})(this)
