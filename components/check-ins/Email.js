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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-email", role: "img", className: "symbol symbol-email" },
  React.createElement(
    "title",
    { id: "title-email" },
    "email icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M7.979 8.17l7.645-5.615a.966.966 0 0 0-.639-.245H.973a.971.971 0 0 0-.64.245zm-3.262-.693L0 4.013v6.928l4.717-3.464zm6.523 0l4.718 3.464V4.013L11.24 7.477zm-1.159.851l-2.1 1.545-2.1-1.545L0 12.644v.413a.973.973 0 0 0 .973.973h14.012a.973.973 0 0 0 .973-.973v-.413z", "data-name": "Your Icon", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Email;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Email = Email;
  }
})(this)
