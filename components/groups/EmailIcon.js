(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var EmailIcon = function EmailIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-email" },
  React.createElement(
    "title",
    { id: "title" },
    "email icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M.9 5.217l6.439 3.126a1.072 1.072 0 0 0 .818 0l6.948-3.433a.358.358 0 0 0 .2-.321 1 1 0 0 0-1-1H1.707A1.016 1.016 0 0 0 .7 4.6v.3a.358.358 0 0 0 .2.317zm13.761 1.5l-5.867 2.9a2.474 2.474 0 0 1-2.048.006l-5.4-2.613a.448.448 0 0 0-.646.405v4.657a.978.978 0 0 0 .973.977h12.548a1.089 1.089 0 0 0 1.079-1.087V7.119a.448.448 0 0 0-.642-.404z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EmailIcon
  } else {
    global.EmailIcon = EmailIcon
  }
})(this)
