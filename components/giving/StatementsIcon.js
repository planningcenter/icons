"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global) {
  "use strict";

  var React = void 0;

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var StatementsIcon = function StatementsIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-statements" },
      React.createElement(
        "title",
        { id: "title" },
        "statements icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { d: "M12.843 1.078V.145H.108v15.71h12.735v-.973H16V1.078zM1.572 14.55V1.45h9.808v13.1zm11.271-.973V2.384h1.693v11.193z", role: "presentation" }),
        React.createElement("path", { d: "M3.383 3.417h6.185v1.306H3.383zm0 2.255h6.185v1.306H3.383zm0 2.256h6.185v1.305H3.383zm0 2.255h6.185v1.305H3.383z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = StatementsIcon;
  } else {
    global.StatementsIcon = StatementsIcon;
  }
})(undefined);