(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PersonArrow = function PersonArrow() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-person-arrow", role: "img", className: "symbol symbol-person-arrow" },
  React.createElement(
    "title",
    { id: "title-person-arrow" },
    "person-arrow icon"
  ),
  React.createElement("path", { d: "M5.9 7.9c-2.1 0-3.8-1.7-3.8-3.8S3.8.3 5.9.3C8 .3 9.7 2 9.7 4.1S7.9 7.9 5.9 7.9zm0-6.3c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.2-2.5-2.5-2.5z", role: "presentation" }),
  React.createElement("path", { d: "M7.7 15.7H2.1c-1.1 0-2-.9-2-2v-3.1c0-1 .6-1.9 1.5-2.2l4.2-1.6 4.3 1.6c.3.1.5.5.4.8-.1.3-.5.5-.8.4L5.9 8.1 2.1 9.5c-.4.2-.7.6-.7 1.1v3.1c0 .4.3.7.7.7h5.6c.4 0 .6.3.6.6s-.2.7-.6.7z", role: "presentation" }),
  React.createElement("path", { d: "M8.9 11.9H14l-1.7-1.6c-.3-.3-.3-.6 0-.8.1-.1.3-.2.4-.2.1 0 .3.1.4.2l2.6 2.4c.3.3.3.7 0 1l-2.6 2.4c-.2.2-.6.2-.8 0-.2-.2-.2-.5 0-.8L14 13H8.9c-.3 0-.6-.2-.6-.5 0-.4.3-.6.6-.6z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PersonArrow;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.PersonArrow = PersonArrow;
  }
})(this)
