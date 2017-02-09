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

  var FileImageIcon = function FileImageIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-file-image" },
      React.createElement(
        "title",
        { id: "title" },
        "file-image icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement(
          "g",
          { "data-name": "Layer 5" },
          React.createElement("path", { "class": "cls-1", d: "M9.845.041H2.35a.8.8 0 0 0-.8.8v14.397a.8.8 0 0 0 .8.8h11.3a.8.8 0 0 0 .8-.8V4.191zM12.409 4.2H9.957a.118.118 0 0 1-.118-.118V1.888zm.7 10.5H2.9V1.391h5.6v2.691a1.468 1.468 0 0 0 1.46 1.471l3.14-.009z", role: "presentation" }),
          React.createElement("path", { "class": "cls-1", d: "M4.2 12.679h7.682V6.73H4.2zm6.932-5.2v2.948l-.78-.91-1.16 1.359L6.89 8.19l-1.936 2.258V7.48zM4.954 11.6L6.89 9.342l2.217 2.587H4.954zm4.322.328l1.08-1.26.78.911v.349z", role: "presentation" }),
          React.createElement("circle", { "class": "cls-1", cx: "9.2", cy: "8.748", r: ".433" })
        )
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = FileImageIcon;
  } else {
    global.FileImageIcon = FileImageIcon;
  }
})(undefined);