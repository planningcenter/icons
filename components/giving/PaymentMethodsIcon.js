(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var PaymentMethodsIcon = function PaymentMethodsIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-payment-methods" },
  React.createElement(
    "title",
    { id: "title" },
    "payment-methods icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M14.9 0H2.42l2.249 1.492h8.515a.56.56 0 0 1 .577.54v.008a.56.56 0 0 1-.577.54H6.335L7.871 3.6h5.312a.56.56 0 0 1 .577.54v.008a.56.56 0 0 1-.577.54H9.616l.053.035a1.99 1.99 0 0 1 .892 1.662v4.661H14.9a.722.722 0 0 0 .722-.721V.722A.722.722 0 0 0 14.9 0z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M9.265 5.587L.937.06a.358.358 0 0 0-.556.3v8.087a1.172 1.172 0 0 0 .451.924l8.283 6.462a.358.358 0 0 0 .578-.282V6.384a.957.957 0 0 0-.428-.797z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PaymentMethodsIcon
  } else {
    global.PaymentMethodsIcon = PaymentMethodsIcon
  }
})(this)
