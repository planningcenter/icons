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

  var AddOnsIcon = function AddOnsIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-add-ons" },
      React.createElement(
        "title",
        { id: "title" },
        "add-ons icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M15.325 4.27h-2.187V2.243a.407.407 0 0 0-.407-.407H9.888a.407.407 0 0 0-.407.407V4.27H6.659V2.243a.407.407 0 0 0-.407-.407H3.409A.407.407 0 0 0 3 2.243V4.27H.675a.592.592 0 0 0-.592.592v9.524a.592.592 0 0 0 .592.592h14.65a.592.592 0 0 0 .592-.592V4.862a.592.592 0 0 0-.592-.592zm-4.991 5.919a.1.1 0 0 1-.1.1H8.863v1.371a.1.1 0 0 1-.1.1H7.239a.1.1 0 0 1-.1-.1v-1.369H5.768a.1.1 0 0 1-.1-.1V8.667a.1.1 0 0 1 .1-.1h1.369V7.2a.1.1 0 0 1 .1-.1h1.524a.1.1 0 0 1 .1.1v1.365h1.369a.1.1 0 0 1 .1.1z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = AddOnsIcon;
  } else {
    global.AddOnsIcon = AddOnsIcon;
  }
})(undefined);