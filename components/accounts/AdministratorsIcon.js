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

  var AdministratorsIcon = function AdministratorsIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-administrators" },
      React.createElement(
        "title",
        { id: "title" },
        "administrators icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M8 0L.026.8v2.986a13.372 13.372 0 0 0 7.45 12.036l.524.26.523-.261a13.373 13.373 0 0 0 7.451-12.035V.8zm0 14.4A11.949 11.949 0 0 1 3.952 11 5.341 5.341 0 0 1 6.54 9.322a2.809 2.809 0 0 0 1.648.578 2.687 2.687 0 0 0 1.189-.29 7.25 7.25 0 0 1 2.469 1.667A11.968 11.968 0 0 1 8 14.405zm.188-6c-.888 0-1.734-1.1-1.734-2.269a1.882 1.882 0 0 1 1.733-2 1.882 1.882 0 0 1 1.733 2C9.921 7.3 9.078 8.4 8.188 8.4zm6.286-4.613a11.927 11.927 0 0 1-1.752 6.25 9.2 9.2 0 0 0-2.095-1.517 4.07 4.07 0 0 0 .794-2.389 3.377 3.377 0 0 0-3.233-3.5 3.377 3.377 0 0 0-3.233 3.5A4.081 4.081 0 0 0 5.472 8.1 6.857 6.857 0 0 0 3.1 9.73a11.93 11.93 0 0 1-1.574-5.944V2.155L8 1.51l6.474.645z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = AdministratorsIcon;
  } else {
    global.AdministratorsIcon = AdministratorsIcon;
  }
})(undefined);