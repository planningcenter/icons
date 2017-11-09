(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FormText = function FormText() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-form-text", role: "img", className: "symbol symbol-form-text" },
  React.createElement("path", { className: "st0", d: "M2 10.4l2.4-5.3c.2-.4.5-.6.9-.6h.1c.4 0 .7.2.9.6l2.4 5.3c0 .1.1.2.1.3 0 .4-.3.7-.7.7-.3 0-.6-.2-.7-.5l-.7-1h-3L3.3 11c-.1.3-.4.5-.7.5-.4 0-.7-.3-.7-.7 0-.2.1-.3.1-.4zm4.2-1.8l-.9-2.3-1 2.3h1.9zm3.1 1.3c0-1.1.9-1.7 2.1-1.7.5 0 .9.1 1.3.2 0-.6-.4-.9-1.1-.9-.4 0-.7.1-1 .1h-.2c-.4 0-.7-.3-.7-.6s.2-.5.4-.6c.5-.2 1-.3 1.6-.3.8 0 1.4.2 1.7.6.4.4.6 1 .6 1.6v2.4c0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.6-.4.4-.8.7-1.6.7-.9 0-1.7-.6-1.7-1.6zm3.4-.3v-.3c-.3-.1-.6-.2-.9-.2-.6 0-1 .3-1 .7 0 .4.3.6.8.6.6.1 1.1-.3 1.1-.8z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FormText;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.FormText = FormText;
  }
})(this)
