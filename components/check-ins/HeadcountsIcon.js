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

  var HeadcountsIcon = function HeadcountsIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-headcounts" },
      React.createElement(
        "title",
        { id: "title" },
        "headcounts icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M13.281 10.838V8.119h-1.893v2.719H8.669v1.893h2.719v2.719h1.893v-2.719H16v-1.893h-2.719zm-3.9-8.231a1.824 1.824 0 1 1 0 3.529 3.944 3.944 0 0 1-.36.6l-.178.238.287.074a2.694 2.694 0 0 0 .691.1 2.774 2.774 0 0 0 0-5.549 2.694 2.694 0 0 0-.691.1l-.286.074.176.238a3.962 3.962 0 0 1 .361.596z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M12.341 2.607a1.824 1.824 0 1 1 0 3.529 3.944 3.944 0 0 1-.36.6l-.178.238.287.074a2.694 2.694 0 0 0 .691.1 2.774 2.774 0 0 0 0-5.549 2.694 2.694 0 0 0-.691.1l-.286.074.176.238a3.962 3.962 0 0 1 .361.596zM2.774 13.453a.7.7 0 0 1-.7-.7v-2.597a.7.7 0 0 1 .434-.65L6.02 8.055l2.649 1.094 1.7-1.024c-.074-.041-2.314-.989-2.314-.989a3.442 3.442 0 1 0-4.075 0L1.888 8A2.323 2.323 0 0 0 .45 10.156v2.594a2.33 2.33 0 0 0 2.324 2.33h5.173v-1.627H2.774zM6.02 2.547A1.824 1.824 0 1 1 4.2 4.371a1.823 1.823 0 0 1 1.82-1.824z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = HeadcountsIcon;
  } else {
    global.HeadcountsIcon = HeadcountsIcon;
  }
})(undefined);