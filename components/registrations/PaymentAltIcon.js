(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var PaymentAltIcon = function PaymentAltIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-payment-alt" },
  React.createElement(
    "title",
    { id: "title" },
    "payment-alt icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M13.51 7.47V3.919a.76.76 0 0 0-.762-.758H2.236a.741.741 0 0 0-.74.758v6.2a.753.753 0 0 0 .74.772h7.807a3.2 3.2 0 0 0 .2.679H.813c-.017 0-.048-.01-.048-.027v-6.2c0-.017.022-.03.039-.03a.366.366 0 1 0 0-.731.768.768 0 0 0-.768.762v6.2a.775.775 0 0 0 .779.758h9.863A2.994 2.994 0 1 0 13.51 7.47zM2.236 3.892h10.513a.028.028 0 0 1 .03.027v1.227H2.228V3.919c0-.019-.008-.027.008-.027zm-.008 6.228V5.877h10.551v1.559a3 3 0 0 0-2.757 2.725H2.236c-.016-.001-.008-.024-.008-.041zM13 12.686a2.264 2.264 0 1 1 2.264-2.264A2.267 2.267 0 0 1 13 12.686z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M13.694 9.6l-.862.934-.375-.359a.366.366 0 0 0-.505.529l.644.616a.366.366 0 0 0 .253.1h.011a.365.365 0 0 0 .257-.118l1.114-1.208a.366.366 0 0 0-.537-.5zM6.459 7.5H3.22a.366.366 0 0 0 0 .731h3.239a.366.366 0 1 0 0-.731zM4.735 8.593H3.22a.366.366 0 0 0 0 .731h1.515a.366.366 0 0 0 0-.731z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PaymentAltIcon
  } else {
    global.PaymentAltIcon = PaymentAltIcon
  }
})(this)
