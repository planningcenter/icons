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

  var FacebookOutlineIcon = function FacebookOutlineIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-facebook-outline" },
      React.createElement(
        "title",
        { id: "title" },
        "facebook-outline icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M12.353 4.987a1.3 1.3 0 0 0-1.023-.5h-1.324V4h.776a1.267 1.267 0 0 0 1.281-1.24l.008-1.5A1.265 1.265 0 0 0 10.789.007H9.345A3.864 3.864 0 0 0 7.437.5 3.138 3.138 0 0 0 5.89 3.406v1.083h-.777a1.3 1.3 0 0 0-.906.365 1.239 1.239 0 0 0-.374.885v1.5a1.266 1.266 0 0 0 1.284 1.237h.772v6.241a1.265 1.265 0 0 0 1.281 1.245h1.546A1.265 1.265 0 0 0 10 14.717V8.476h.969A1.286 1.286 0 0 0 12.2 7.57l.36-1.483a1.222 1.222 0 0 0-.207-1.1zm-1.387 2.244h-2.25v7.487H7.171V7.231H5.117v-1.5h2.054V3.406A2.026 2.026 0 0 1 9.345 1.25h1.446l-.007 1.5h-1.34c-.736 0-.719.608-.719.608v2.376h2.6z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = FacebookOutlineIcon;
  } else {
    global.FacebookOutlineIcon = FacebookOutlineIcon;
  }
})(undefined);