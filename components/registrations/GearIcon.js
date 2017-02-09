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

  var GearIcon = function GearIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-gear" },
      React.createElement(
        "title",
        { id: "title" },
        "gear icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M15.187 8.907V7.644a.6.6 0 0 0-.6-.6h-.65a.61.61 0 0 1-.574-.436 5.382 5.382 0 0 0-.329-.789.609.609 0 0 1 .1-.716l.461-.461a.6.6 0 0 0 0-.854l-.893-.893a.6.6 0 0 0-.854 0l-.461.461a.609.609 0 0 1-.716.1 5.38 5.38 0 0 0-.789-.328.61.61 0 0 1-.436-.574v-.65a.6.6 0 0 0-.6-.6H7.571a.6.6 0 0 0-.6.6v.65a.61.61 0 0 1-.436.574 5.38 5.38 0 0 0-.789.328.609.609 0 0 1-.716-.1l-.466-.466a.6.6 0 0 0-.854 0l-.893.893a.6.6 0 0 0 0 .854l.461.461a.609.609 0 0 1 .1.716 5.382 5.382 0 0 0-.329.789.61.61 0 0 1-.574.436h-.65a.6.6 0 0 0-.6.6v1.268a.6.6 0 0 0 .6.6h.65a.61.61 0 0 1 .574.436 5.382 5.382 0 0 0 .329.79.609.609 0 0 1-.1.716l-.461.461a.6.6 0 0 0 0 .854l.893.893a.6.6 0 0 0 .854 0l.46-.46a.609.609 0 0 1 .716-.1 5.381 5.381 0 0 0 .789.329.61.61 0 0 1 .436.574v.65a.6.6 0 0 0 .6.6h1.269a.6.6 0 0 0 .6-.6V14a.61.61 0 0 1 .436-.574 5.382 5.382 0 0 0 .789-.329.609.609 0 0 1 .716.1l.461.461a.6.6 0 0 0 .854 0l.893-.893a.6.6 0 0 0 0-.854l-.461-.461a.609.609 0 0 1-.1-.716 5.382 5.382 0 0 0 .329-.789.61.61 0 0 1 .574-.436h.65a.6.6 0 0 0 .612-.602zM8.2 11.436a3.16 3.16 0 1 1 3.16-3.16 3.164 3.164 0 0 1-3.16 3.16z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = GearIcon;
  } else {
    global.GearIcon = GearIcon;
  }
})(undefined);