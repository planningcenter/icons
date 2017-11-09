(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FormCheckbox = function FormCheckbox() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-form-checkbox", role: "img", className: "symbol symbol-form-checkbox" },
  React.createElement("path", { d: "M13.4 10v3.4H2.6V2.6h6.1V1.1H2.3c-.7 0-1.2.6-1.2 1.2v11.3c0 .7.6 1.2 1.2 1.2h11.3c.7 0 1.2-.6 1.2-1.2V10h-1.4z", role: "presentation" }),
  React.createElement("path", { className: "st0", d: "M8.4 10.7c-.1 0-.3-.1-.4-.2L4.5 7.3c-.1-.1-.1-.2 0-.3l1.1-1.2c0-.1.1-.1.1-.1s.1 0 .1.1l2.5 2.3 5-5.1.1-.1s.1 0 .1.1l1.1 1.1c.1.1.1.2 0 .3l-6 6.1c.1.2-.1.2-.2.2z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FormCheckbox;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.FormCheckbox = FormCheckbox;
  }
})(this)
