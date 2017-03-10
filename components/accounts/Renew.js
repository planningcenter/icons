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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-renew" },
  React.createElement(
    "title",
    { id: "title" },
    "renew icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M8.054 15.9A7.89 7.89 0 1 1 7.994.118H8a7.887 7.887 0 0 1 5.614 13.429 7.805 7.805 0 0 1-5.56 2.353zM8 1.519A6.49 6.49 0 1 0 8 14.5a6.5 6.5 0 0 0 6.489-6.531A6.513 6.513 0 0 0 8 1.519z", role: "presentation" }),
    React.createElement("path", { className: "cls-2", d: "M8 12.532a4.531 4.531 0 0 1-4.523-4.555 4.651 4.651 0 0 1 .1-.895.65.65 0 0 1 1.273.264 3.213 3.213 0 0 0 .864 2.929 3.179 3.179 0 0 0 2.27.957A3.223 3.223 0 1 0 8 4.786a3.205 3.205 0 0 0-2.2.872.649.649 0 1 1-.889-.947A4.5 4.5 0 0 1 8 3.485a4.523 4.523 0 1 1 0 9.047z", role: "presentation" }),
    React.createElement("path", { className: "cls-2", d: "M5.423 8.882a.646.646 0 0 1-.46-.191l-.836-.836-.836.836a.65.65 0 0 1-.92-.918l1.3-1.3a.669.669 0 0 1 .92 0l1.3 1.3a.65.65 0 0 1-.46 1.109z", role: "presentation" })
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
