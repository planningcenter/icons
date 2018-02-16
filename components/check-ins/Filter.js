(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Filter = function Filter() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-filter", role: "img", className: "symbol symbol-filter" },
  React.createElement(
    "title",
    { id: "title-filter" },
    "filter icon"
  ),
  React.createElement("path", { d: "M15.182 1.284H.814a.468.468 0 0 0-.321.809l5.749 6.186V14.4a.342.342 0 0 0 .511.283l2.67-2.259a.7.7 0 0 0 .365-.638V8.282l5.711-6.2a.46.46 0 0 0-.317-.798z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Filter;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Filter = Filter;
  }
})(this)
