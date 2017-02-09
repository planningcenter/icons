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

  var ExternalLinkIcon = function ExternalLinkIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-external-link" },
      React.createElement(
        "title",
        { id: "title" },
        "external-link icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M12.433 7.738v6.108H2.222V3.378h5.87c.174 0 .041-.226.041-.226L6.355 1.373H1.9A1.684 1.684 0 0 0 .218 3.057v11.109A1.684 1.684 0 0 0 1.9 15.85h10.854a1.684 1.684 0 0 0 1.684-1.684v-4.71L12.611 7.63s-.178-.049-.178.108z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M15.136.15H9.26a.5.5 0 0 0-.355.858l2.037 2.037L6 7.984a1.225 1.225 0 0 0 1.736 1.733l4.938-4.939 2.25 2.25a.5.5 0 0 0 .858-.355V.8a.646.646 0 0 0-.646-.65z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = ExternalLinkIcon;
  } else {
    global.ExternalLinkIcon = ExternalLinkIcon;
  }
})(undefined);