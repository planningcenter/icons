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

  var PhoneOutlineIcon = function PhoneOutlineIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-phone-outline" },
      React.createElement(
        "title",
        { id: "title" },
        "phone-outline icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M12.916.015H3.745a.99.99 0 0 0-.986.993v13.909a.99.99 0 0 0 .986.994h9.171a.99.99 0 0 0 .986-.994V1.008a.99.99 0 0 0-.986-.993zm-.754 13.909a.228.228 0 0 1-.232.223h-7.2a.228.228 0 0 1-.232-.223V2a.228.228 0 0 1 .232-.223h7.2a.228.228 0 0 1 .232.223zm-3.73-2.813A1.025 1.025 0 1 0 9.5 12.135a1.045 1.045 0 0 0-1.068-1.024z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = PhoneOutlineIcon;
  } else {
    global.PhoneOutlineIcon = PhoneOutlineIcon;
  }
})(undefined);