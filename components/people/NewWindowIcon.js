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

  var NewWindowIcon = function NewWindowIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-new-window" },
      React.createElement(
        "title",
        { id: "title" },
        "new-window icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M14.086 10.267v3.819H1.914V1.914H5.43V.291H1.669A1.379 1.379 0 0 0 .291 1.668v12.663a1.379 1.379 0 0 0 1.377 1.377h12.664a1.379 1.379 0 0 0 1.377-1.377v-4.064z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M8.576 8.625l5.456-5.5v3.53h1.623V1.23a.885.885 0 0 0-.885-.885H9.343v1.623h3.552L7.424 7.482z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = NewWindowIcon;
  } else {
    global.NewWindowIcon = NewWindowIcon;
  }
})(undefined);