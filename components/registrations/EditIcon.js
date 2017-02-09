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

  var EditIcon = function EditIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-edit" },
      React.createElement(
        "title",
        { id: "title" },
        "edit icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M9.649 3.178l-7.9 7.9-.8 3.358a.511.511 0 0 0 .618.618l3.333-.829 7.9-7.9zm3.903 2.393L15 4.12a1.119 1.119 0 0 0 .065-1.566L13.5.984a1.213 1.213 0 0 0-1.645-.012L10.4 2.423z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = EditIcon;
  } else {
    global.EditIcon = EditIcon;
  }
})(undefined);