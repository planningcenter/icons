(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Ie = function Ie() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-ie" },
  React.createElement(
    "title",
    { id: "title" },
    "ie icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M11.85 9.271h3.94a5.46 5.46 0 0 0 .057-.919 7.408 7.408 0 0 0-4.729-6.8l.208.044S16.3-.723 14.645 4.408l.2.355S16.3.849 13.958.2c-1.917-.534-4.75.949-4.75.949l.1.022a7.214 7.214 0 0 0-.533-.022 7.052 7.052 0 0 0-6.968 5.989A18.585 18.585 0 0 1 5.23 3.814S2.5 6.305 1.71 8.351a16.345 16.345 0 0 0-1.345 3.2c-.2.83-.718 3.81 1.345 4.152a5.712 5.712 0 0 0 3.84-.81l-.041-.024a6.816 6.816 0 0 0 3.27.835 7.1 7.1 0 0 0 6.71-5.041h-4.043a2.817 2.817 0 0 1-2.682 1.69c-1.532 0-2.655-1.175-2.947-3.084h6.033zm-6.777 5.343a6.173 6.173 0 0 1-2.189.646c-3.062-.03-.768-4.45-.768-4.45v-.006a7.324 7.324 0 0 0 2.965 3.816zM8.779 4.556a2.64 2.64 0 0 1 2.8 2.639H5.846a2.94 2.94 0 0 1 2.933-2.639z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Ie;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Ie = Ie;
  }
})(this)