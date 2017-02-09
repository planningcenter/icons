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

  var ScopeIcon = function ScopeIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-scope" },
      React.createElement(
        "title",
        { id: "title" },
        "scope icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M10.036 11.375v.018a.53.53 0 0 0 .147.408.565.565 0 0 0 .409.173h4.841a.564.564 0 0 0 .432-.2.529.529 0 0 0 .114-.45l-1.946-7.91a.553.553 0 0 0-.546-.431h-2.946a.548.548 0 0 0-.557.54v.087c0 .619-1.214 1.122-1.957 1.122h-.158c-.742 0-1.956-.5-1.956-1.122v-.087a.549.549 0 0 0-.557-.54H2.64a.553.553 0 0 0-.544.423L.014 11.317a.528.528 0 0 0 .11.455.565.565 0 0 0 .435.2h4.8a.564.564 0 0 0 .409-.173.529.529 0 0 0 .147-.408V9.31c0-.619 1.214-1.122 1.956-1.122h.159c.742 0 2.012.5 2.012 1.122v2.008l-.006.057zM5.43 13.014H.558a.549.549 0 0 0-.557.54v1.906a.549.549 0 0 0 .557.54H5.43a.549.549 0 0 0 .557-.54v-1.906a.549.549 0 0 0-.557-.54zM2.563 2h2.866a.549.549 0 0 0 .557-.54V.538A.549.549 0 0 0 5.43 0H2.563a.549.549 0 0 0-.557.54v.919A.549.549 0 0 0 2.563 2zm8.043 0h2.866a.549.549 0 0 0 .557-.54V.538A.549.549 0 0 0 13.472 0h-2.866a.549.549 0 0 0-.557.54v.919a.549.549 0 0 0 .557.541zm4.837 11.017h-4.816a.549.549 0 0 0-.557.54v1.906a.549.549 0 0 0 .557.54h4.816a.548.548 0 0 0 .557-.54v-1.909a.548.548 0 0 0-.557-.54z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = ScopeIcon;
  } else {
    global.ScopeIcon = ScopeIcon;
  }
})(undefined);