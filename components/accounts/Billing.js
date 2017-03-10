(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Billing = function Billing() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-billing" },
  React.createElement(
    "title",
    { id: "title" },
    "billing icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M.37.023v15.954l2.775-1.387 2.775 1.387L8 14.59l2.775 1.387 2.081-1.387 2.775 1.387V.023zm13.873 13.709l-1.487-.744-2.081 1.387L7.9 12.989l-2.08 1.387-2.675-1.337-1.387.694V1.41h12.485z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M4.206 3.617h7.741v1.348H4.206zm0 2.697h7.741v1.349H4.206zm0 2.697h7.741v1.349H4.206z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Billing;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Billing = Billing;
  }
})(this)
