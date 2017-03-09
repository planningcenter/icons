(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ContactCard = function ContactCard() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-contact-card" },
  React.createElement(
    "title",
    { id: "title" },
    "contact-card icon"
  ),
  React.createElement(
    "g",
    { fill: "#231f20", "data-name": "Layer 1" },
    React.createElement("path", { d: "M13.13 5.89h-5v.88h5zm0 1.76h-5v.88h5zM10.5 9.39H8.11v.88h2.39zM6.11 8.2L5.59 8A.91.91 0 0 0 6 7.2v-.74a1.44 1.44 0 1 0-2.88 0v.74a.91.91 0 0 0 .51.8l-.52.21a1 1 0 0 0-.64.94v1.48a.52.52 0 0 0 .52.52h3.24a.52.52 0 0 0 .52-.52V9.14a1 1 0 0 0-.64-.94zM4 6.46a.66.66 0 1 1 1.31 0v.74a.13.13 0 0 1-.07.11l-.43.24a.33.33 0 0 1-.31 0L4 7.31a.13.13 0 0 1 0-.11zm2 3.9H3.25V9.14a.23.23 0 0 1 .14-.21l1.22-.48 1.2.48a.23.23 0 0 1 .19.21z", role: "presentation" }),
    React.createElement("path", { d: "M15.09 2.17v11.66H.89V2.17h14.2m0-.9H.89a.9.9 0 0 0-.9.9v11.66a.9.9 0 0 0 .9.9h14.2a.9.9 0 0 0 .9-.9V2.17a.9.9 0 0 0-.9-.9z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ContactCard;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.ContactCard = ContactCard;
  }
})(this)
