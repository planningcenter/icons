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

  var EveClosedIcon = function EveClosedIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-eve-closed" },
      React.createElement(
        "title",
        { id: "title" },
        "eve-closed icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M15.122 8a11.685 11.685 0 0 0-1.863-2.259.574.574 0 0 0-.83.048.624.624 0 0 0 .046.859 10.187 10.187 0 0 1 1.444 1.689 8.87 8.87 0 0 1-2.774 2.686.62.62 0 0 0-.223.829.583.583 0 0 0 .512.31.569.569 0 0 0 .288-.079 10.294 10.294 0 0 0 3.4-3.409.627.627 0 0 0 0-.674zm-3-4.29a.622.622 0 0 0-.159-.845.575.575 0 0 0-.816.165l-.634.975a4.361 4.361 0 0 0-.824-.227c-3.056-.7-6.156.88-8.3 4.222a.627.627 0 0 0 0 .674 10.132 10.132 0 0 0 3.749 3.6l-.579.891a.622.622 0 0 0 .159.845.571.571 0 0 0 .328.1.582.582 0 0 0 .488-.269l2.343-3.6a1.822 1.822 0 0 0 .378.039 1.912 1.912 0 0 0 1.877-1.944 1.984 1.984 0 0 0-.316-1.078zm-3.24 2.8a1.8 1.8 0 0 0-.63-.12 1.912 1.912 0 0 0-1.873 1.951 1.968 1.968 0 0 0 .482 1.29L5.8 11.256a8.6 8.6 0 0 1-3.207-2.915c1.882-2.731 4.375-3.954 6.89-3.36A.634.634 0 0 0 9.6 5a1.757 1.757 0 0 1 .25.037z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = EveClosedIcon;
  } else {
    global.EveClosedIcon = EveClosedIcon;
  }
})(undefined);