(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var HouseholdError = function HouseholdError() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-household-error" },
  React.createElement(
    "title",
    { id: "title" },
    "household-error icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M15.424 7.5L14.4 6.592v-2.9a1.036 1.036 0 0 0-1.038-1.006h-1.3a.979.979 0 0 0-.973 1.006v.018L9.166 2.047a1.741 1.741 0 0 0-2.281 0L.624 7.5a1.018 1.018 0 0 0 .666 1.788h1.083v4.053a1.148 1.148 0 0 0 1.144 1.176h8.993a1.209 1.209 0 0 0 1.209-1.176V9.288h1.019a1.024 1.024 0 0 0 .966-.671 1 1 0 0 0-.28-1.117zm-2.268.763a.494.494 0 0 0-.494.494v4.584a.152.152 0 0 1-.152.152H3.517a.152.152 0 0 1-.152-.152V8.757a.494.494 0 0 0-.494-.494H1.3L7.55 2.82a.705.705 0 0 1 .927 0l3.2 2.792a.241.241 0 0 0 .4-.182V3.712h1.263v2.963a.842.842 0 0 0 .289.635l1.095.954z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M6.2 8.67a.275.275 0 0 0-.389 0l-.367.367-.367-.367a.275.275 0 0 0-.389 0 .275.275 0 0 0 0 .389l.367.367-.367.367a.275.275 0 0 0 0 .389.275.275 0 0 0 .389 0l.367-.367.367.367a.275.275 0 0 0 .389 0 .275.275 0 0 0 0-.389l-.367-.367.367-.367a.275.275 0 0 0 0-.389zm5.161 0a.275.275 0 0 0-.389 0l-.367.367-.367-.367a.275.275 0 0 0-.389 0 .275.275 0 0 0 0 .389l.367.367-.367.367a.275.275 0 0 0 0 .389.275.275 0 0 0 .389 0l.362-.362.367.367a.275.275 0 0 0 .389 0 .275.275 0 0 0 0-.389l-.367-.367.367-.367a.275.275 0 0 0 .005-.394zm-1.707 3.321a2.521 2.521 0 0 0-3.265 0 .3.3 0 0 0 0 .459.3.3 0 0 0 .4.007 1.9 1.9 0 0 1 2.464 0 .3.3 0 0 0 .4-.007.3.3 0 0 0 .001-.459z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = HouseholdError;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.HouseholdError = HouseholdError;
  }
})(this)
