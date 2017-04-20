(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Email = function Email() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-email" },
  React.createElement(
    "title",
    { id: "title" },
    "email icon"
  ),
  React.createElement("path", { d: "M.9 5.22l6.44 3.12a1.07 1.07 0 0 0 .82 0l6.95-3.43a.36.36 0 0 0 .2-.32 1 1 0 0 0-1-1H1.71a1 1 0 0 0-1 1v.3a.36.36 0 0 0 .19.33zm13.76 1.5l-5.87 2.9a2.47 2.47 0 0 1-2 0L1.34 7a.45.45 0 0 0-.64.41v4.66a1 1 0 0 0 1 1h12.52A1.09 1.09 0 0 0 15.3 12V7.12a.45.45 0 0 0-.64-.41z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Email;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.Email = Email;
  }
})(this)
