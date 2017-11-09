(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FormBreak = function FormBreak() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-form-break", role: "img", className: "symbol symbol-form-break" },
  React.createElement("path", { d: "M3.7 9.3H1c-.4 0-.8-.4-.8-.8v-.9c0-.4.4-.8.8-.8h2.7c.4 0 .8.4.8.8v.9c0 .4-.3.8-.8.8zm5.7 0H6.7c-.4 0-.8-.4-.8-.8v-.9c0-.4.4-.8.8-.8h2.7c.4 0 .8.4.8.8v.9c0 .4-.4.8-.8.8zm5.6 0h-2.7c-.4 0-.8-.4-.8-.8v-.9c0-.4.4-.8.8-.8H15c.4 0 .8.4.8.8v.9c0 .4-.3.8-.8.8z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FormBreak;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.FormBreak = FormBreak;
  }
})(this)
