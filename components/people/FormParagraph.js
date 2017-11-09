(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FormParagraph = function FormParagraph() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-form-paragraph", role: "img", className: "symbol symbol-form-paragraph" },
  React.createElement("path", { d: "M14.3 4.5H1.7c-.4 0-.8-.4-.8-.8v-.9c0-.4.3-.8.8-.8h12.7c.4 0 .8.4.8.8v.9c-.1.4-.4.8-.9.8zm0 4.7H1.7c-.4 0-.8-.4-.8-.8v-.8c0-.4.4-.8.8-.8h12.7c.4 0 .8.4.8.8v.9c-.1.4-.4.7-.9.7zm-3 4.8H1.7c-.4 0-.8-.4-.8-.8v-.9c0-.4.4-.8.8-.8h9.7c.4 0 .8.4.8.8v.9c-.1.4-.4.8-.9.8z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FormParagraph;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.FormParagraph = FormParagraph;
  }
})(this)
