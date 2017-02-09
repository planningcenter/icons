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

  var TemplateOIcon = function TemplateOIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-template-o" },
      React.createElement(
        "title",
        { id: "title" },
        "template-o icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M14.819 0H1.11A1.145 1.145 0 0 0-.035 1.145v13.71A1.145 1.145 0 0 0 1.11 16h13.71a1.145 1.145 0 0 0 1.145-1.145V1.145A1.145 1.145 0 0 0 14.819 0zm-.857 5.788h-6.29V2h6.29zM1.966 2h3.7v12h-3.7zm5.706 12V7.79h6.29V14z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = TemplateOIcon;
  } else {
    global.TemplateOIcon = TemplateOIcon;
  }
})(undefined);