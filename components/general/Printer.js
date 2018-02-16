(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Printer = function Printer() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-printer", role: "img", className: "symbol symbol-printer" },
  React.createElement(
    "title",
    { id: "title-printer" },
    "printer icon"
  ),
  React.createElement("path", { d: "M11.5 3.505v3h-5v-3h5m.5-1.5H6a1 1 0 0 0-1 1v5h8v-5a1 1 0 0 0-1-1zm-.5 9.5v3h-5v-3h5m1.5-1.5H5v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-5z", role: "presentation" }),
  React.createElement("path", { d: "M15 6.005H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2v-2h8v2h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Printer;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.Printer = Printer;
  }
})(this)
