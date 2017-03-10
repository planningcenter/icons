(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Apple = function Apple() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-apple" },
  React.createElement(
    "title",
    { id: "title" },
    "apple icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M12.478 5.665a3.247 3.247 0 0 0-1.074 1.1 2.59 2.59 0 0 0-.284 1.2 2.508 2.508 0 0 0 .169.935 3.091 3.091 0 0 0 .477.8 3.261 3.261 0 0 0 1.031.756 6.888 6.888 0 0 1-.867 1.672 5.234 5.234 0 0 1-1.065 1.209 1.541 1.541 0 0 1-.911.357 2.84 2.84 0 0 1-.935-.222l-.183-.067-.3-.125a2.419 2.419 0 0 0-.7-.1 2.7 2.7 0 0 0-.887.173l-.231.087-.289.116a1.9 1.9 0 0 1-.694.135 2.237 2.237 0 0 1-1.571-1.026 7.548 7.548 0 0 1-1.267-2.207 6.939 6.939 0 0 1-.429-2.385 3.834 3.834 0 0 1 .88-2.573 2.987 2.987 0 0 1 2.394-1.029 2.635 2.635 0 0 1 1.031.2l.222.087.231.1a1.4 1.4 0 0 0 .491.125 1.466 1.466 0 0 0 .54-.106l.308-.116.222-.087a3.38 3.38 0 0 1 1.195-.2 3.025 3.025 0 0 1 2.496 1.191zM10.03 1.724q.019.212.019.328A2.571 2.571 0 0 1 9.7 3.285a2.62 2.62 0 0 1-.906.988 2.27 2.27 0 0 1-1.233.352 3.055 3.055 0 0 1-.029-.337 2.271 2.271 0 0 1 .3-1.074 2.947 2.947 0 0 1 .824-.959 2.6 2.6 0 0 1 1.176-.5z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Apple;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Apple = Apple;
  }
})(this)
