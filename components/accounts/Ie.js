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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-ie", role: "img", className: "symbol symbol-ie" },
  React.createElement(
    "title",
    { id: "title-ie" },
    "ie icon"
  ),
  React.createElement("path", { d: "M11.85 9.271h3.94a5.507 5.507 0 0 0 .057-.92 7.408 7.408 0 0 0-4.729-6.8l.207.043s4.98-2.313 3.32 2.818l.2.354S16.3.849 13.958.2c-1.917-.534-4.75.949-4.75.949l.1.021a7.216 7.216 0 0 0-.533-.021 7.052 7.052 0 0 0-6.968 5.989A18.607 18.607 0 0 1 5.23 3.814S2.5 6.305 1.71 8.351a16.4 16.4 0 0 0-1.345 3.2c-.2.83-.717 3.81 1.345 4.152a5.716 5.716 0 0 0 3.84-.803l-.041-.024a6.816 6.816 0 0 0 3.27.835 7.1 7.1 0 0 0 6.709-5.042h-4.042a2.817 2.817 0 0 1-2.682 1.691c-1.531 0-2.654-1.175-2.946-3.084h6.032zm-6.777 5.343a6.181 6.181 0 0 1-2.189.647c-3.062-.03-.768-4.45-.768-4.45v-.006a7.328 7.328 0 0 0 2.965 3.815zM8.779 4.556a2.639 2.639 0 0 1 2.8 2.639H5.846a2.939 2.939 0 0 1 2.933-2.639z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Ie;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Ie = Ie;
  }
})(this)
