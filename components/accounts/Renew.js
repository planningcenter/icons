(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Renew = function Renew() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-renew", role: "img", className: "symbol symbol-renew" },
  React.createElement(
    "title",
    { id: "title-renew" },
    "renew icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M8.054 15.9A7.89 7.89 0 1 1 7.994.118H8a7.886 7.886 0 0 1 5.614 13.429 7.8 7.8 0 0 1-5.56 2.353zM8 1.519A6.49 6.49 0 1 0 8 14.5a6.5 6.5 0 0 0 6.489-6.531A6.512 6.512 0 0 0 8 1.519z", role: "presentation" }),
    React.createElement("path", { d: "M8 12.532a4.529 4.529 0 0 1-4.523-4.555 4.623 4.623 0 0 1 .1-.9.651.651 0 1 1 1.274.264 3.2 3.2 0 0 0 .864 2.928 3.172 3.172 0 0 0 2.269.957A3.223 3.223 0 1 0 8 4.786a3.206 3.206 0 0 0-2.2.872.649.649 0 0 1-.889-.947A4.521 4.521 0 1 1 8 12.532z", role: "presentation" }),
    React.createElement("path", { d: "M5.423 8.882a.647.647 0 0 1-.46-.192l-.836-.836-.836.836a.65.65 0 1 1-.92-.918l1.3-1.3a.668.668 0 0 1 .92 0l1.3 1.3a.651.651 0 0 1-.46 1.11z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Renew;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Renew = Renew;
  }
})(this)
