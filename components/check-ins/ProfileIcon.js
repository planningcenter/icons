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

  var ProfileIcon = function ProfileIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-profile" },
      React.createElement(
        "title",
        { id: "title" },
        "profile icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M14.943 2.139H1.057a.989.989 0 0 0-.989.989v9.435a.989.989 0 0 0 .989.989h2.482v-.782a1.02 1.02 0 1 1 .989 0v.782h6.944v-.782a1.02 1.02 0 1 1 .989 0v.782h2.481a.988.988 0 0 0 .989-.989V3.128a.988.988 0 0 0-.988-.989zm-7.851 7H1.443V3.487h5.649zm5.776-2.21h-4.5v-.991h4.5zm1.483-1.978H8.365v-.992h5.986z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = ProfileIcon;
  } else {
    global.ProfileIcon = ProfileIcon;
  }
})(undefined);