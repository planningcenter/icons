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

  var ListIcon = function ListIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-list" },
      React.createElement(
        "title",
        { id: "title" },
        "list icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("rect", { "class": "cls-1", x: ".473", y: "1.945", width: "2.997", height: "2.891", rx: ".805", ry: ".805" }),
        React.createElement("rect", { "class": "cls-1", x: "5.207", y: "2.164", width: "10.291", height: "2.461", rx: ".805", ry: ".805" }),
        React.createElement("rect", { "class": "cls-1", x: ".473", y: "6.7", width: "2.997", height: "2.891", rx: ".805", ry: ".805" }),
        React.createElement("rect", { "class": "cls-1", x: "5.207", y: "6.919", width: "10.291", height: "2.461", rx: ".805", ry: ".805" }),
        React.createElement("rect", { "class": "cls-1", x: ".473", y: "11.455", width: "2.997", height: "2.891", rx: ".805", ry: ".805" }),
        React.createElement("rect", { "class": "cls-1", x: "5.207", y: "11.674", width: "10.291", height: "2.461", rx: ".805", ry: ".805" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = ListIcon;
  } else {
    global.ListIcon = ListIcon;
  }
})(undefined);