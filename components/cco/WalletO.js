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
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M14.28,3l-.72-3L0,3l.05.05V16H16V3ZM12.82,1.21,13.25,3H4.14ZM15,15H1.05V4H15Z", style: "fill:#010101", role: "presentation" }),
    React.createElement("path", { d: "M15,8v3H8.5a1.5,1.5,0,0,1,0-3H15m1-1H8.5a2.5,2.5,0,0,0,0,5H16V7Z", style: "fill:#010101", role: "presentation" }),
    React.createElement("circle", { cx: "8.5", cy: "9.5", r: "0.5", style: "fill:#010101" })
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
