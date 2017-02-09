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

  var AlertExclamationOIcon = function AlertExclamationOIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-alert-exclamation-o" },
      React.createElement(
        "title",
        { id: "title" },
        "alert-exclamation-o icon"
      ),
      React.createElement("path", { d: "M8.666 5.042H7.333a.26.26 0 0 0-.2.087.3.3 0 0 0-.075.2l.1 3.883a.29.29 0 0 0 .084.2.264.264 0 0 0 .2.087h1.104a.27.27 0 0 0 .2-.087.29.29 0 0 0 .083-.2l.121-3.883a.286.286 0 0 0-.085-.2.264.264 0 0 0-.199-.087zm-.047 5.246H7.382a.267.267 0 0 0-.2.083.3.3 0 0 0-.082.229v1.22a.279.279 0 0 0 .282.29h1.237c.187 0 .278-.1.272-.29V10.6a.333.333 0 0 0-.072-.221.245.245 0 0 0-.2-.091zm7.272 2.566a1.987 1.987 0 0 0-.183-.4L9.293.953a2.4 2.4 0 0 0-.44-.56A1.271 1.271 0 0 0 7.126.4a2.386 2.386 0 0 0-.437.56L.316 12.416a1.773 1.773 0 0 0-.218.462 1.805 1.805 0 0 0-.075.516 1.251 1.251 0 0 0 .612 1.136 1.881 1.881 0 0 0 .959.262h12.812a1.88 1.88 0 0 0 .96-.263 1.254 1.254 0 0 0 .611-1.135 1.644 1.644 0 0 0-.087-.539zm-1.1.625a.751.751 0 0 1-.388.106H1.594a.507.507 0 0 1-.409-.192.528.528 0 0 1 .022-.154.737.737 0 0 1 .092-.183l6.4-11.5a1.174 1.174 0 0 1 .217-.278.1.1 0 0 1 .08-.028l.076.025a1.236 1.236 0 0 1 .221.278l6.425 11.52a.906.906 0 0 1 .083.179.439.439 0 0 1-.007.228z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = AlertExclamationOIcon;
  } else {
    global.AlertExclamationOIcon = AlertExclamationOIcon;
  }
})(undefined);