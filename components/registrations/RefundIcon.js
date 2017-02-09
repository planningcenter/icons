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

  var RefundIcon = function RefundIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-refund" },
      React.createElement(
        "title",
        { id: "title" },
        "refund icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M8.53 9.983a1.221 1.221 0 0 1-.753.2 2.6 2.6 0 0 1-1.013-.209.642.642 0 0 0-.519.011.651.651 0 0 0 .04 1.2 3.958 3.958 0 0 0 1.24.251v.263a.686.686 0 1 0 1.371 0v-.435a2.3 2.3 0 0 0 .7-.378A1.829 1.829 0 0 0 10.3 9.4a1.758 1.758 0 0 0-.433-1.208 3.2 3.2 0 0 0-1.344-.8 2.643 2.643 0 0 1-.882-.434.527.527 0 0 1-.169-.4.538.538 0 0 1 .2-.438.918.918 0 0 1 .609-.183 2.3 2.3 0 0 1 .815.151.655.655 0 0 0 .504-.021.629.629 0 0 0 .33-.368.64.64 0 0 0-.372-.8A3.165 3.165 0 0 0 8.9 4.73v-.481a.686.686 0 0 0-1.371 0v.536a2.213 2.213 0 0 0-.917.474 1.843 1.843 0 0 0-.66 1.435c0 .856.607 1.5 1.8 1.908a2.319 2.319 0 0 1 .817.412.631.631 0 0 1 .194.483.571.571 0 0 1-.233.486z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M15.721 8.007a7.68 7.68 0 1 0-11.16 6.846l-.2.5a.349.349 0 0 0 .369.479l2.331-.31a.349.349 0 0 0 .23-.559L5.852 13.1a.349.349 0 0 0-.6.08l-.167.4a6.306 6.306 0 1 1 5.561.175.686.686 0 1 0 .568 1.245 7.7 7.7 0 0 0 4.507-6.993z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = RefundIcon;
  } else {
    global.RefundIcon = RefundIcon;
  }
})(undefined);