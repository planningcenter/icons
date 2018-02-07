(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var EmailAgain = function EmailAgain() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-email-again", role: "img", className: "symbol symbol-email-again" },
  React.createElement(
    "title",
    { id: "title-email-again" },
    "email-again icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M.9 5.217l6.439 3.126a1.073 1.073 0 0 0 .818 0l6.948-3.433a.358.358 0 0 0 .2-.321 1 1 0 0 0-1-1H1.707A1.016 1.016 0 0 0 .7 4.6v.3a.356.356 0 0 0 .2.317zm13.761 1.5l-5.867 2.9a2.45 2.45 0 0 1-1.026.225 2.484 2.484 0 0 1-1.022-.219l-5.4-2.614a.449.449 0 0 0-.646.406v4.657a.978.978 0 0 0 .973.978h12.548a1.089 1.089 0 0 0 1.079-1.088V7.119a.448.448 0 0 0-.642-.404z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EmailAgain;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.EmailAgain = EmailAgain;
  }
})(this)
