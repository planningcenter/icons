(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var StripeLink = function StripeLink() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-stripe-link" },
  React.createElement(
    "title",
    { id: "title" },
    "stripe-link icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M14.652 9.888h-1.096v3.668H2.392V2.392H6.06V0H0v15.948h15.948v-6.06h-1.296zM8.612 0v.1l2.836 2.847-.934.956L12.28 5.6l.92-.902 2.648 2.638h.1V0H8.612z", role: "presentation" }),
    React.createElement("path", { className: "cls-2", d: "M7.447 6.472c0-.318.265-.441.691-.441a4.563 4.563 0 0 1 2.025.524V4.638a5.379 5.379 0 0 0-2.023-.373c-1.651 0-2.753.863-2.753 2.3 0 2.254 3.1 1.888 3.1 2.86 0 .376-.327.5-.781.5a5.129 5.129 0 0 1-2.228-.65v1.945a5.65 5.65 0 0 0 2.226.462c1.693 0 2.859-.836 2.859-2.3-.003-2.429-3.116-1.994-3.116-2.91z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = StripeLink;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.StripeLink = StripeLink;
  }
})(this)
