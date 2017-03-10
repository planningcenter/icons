(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var WalletO = function WalletO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-wallet-o" },
  React.createElement(
    "title",
    { id: "title" },
    "wallet-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M14.279 3.021L13.556 0 0 3l.05.05V16H16V3.021zm-1.461-1.807L13.246 3H4.137zM15 15H1.05V4.021H15z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M15 8v3H8.5a1.5 1.5 0 0 1 0-3H15m1-1H8.5a2.5 2.5 0 0 0 0 5H16V7z", role: "presentation" }),
    React.createElement("circle", { "class": "cls-1", cx: "8.5", cy: "9.5", r: ".5" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = WalletO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.WalletO = WalletO;
  }
})(this)
