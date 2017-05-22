(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Warning = function Warning() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-warning" },
  React.createElement(
    "title",
    { id: "title" },
    "warning icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M15.932 13.638L8.473 1.181a.57.57 0 0 0-.93 0L.083 13.638a.559.559 0 0 0 .425.831h15a.559.559 0 0 0 .424-.831zm-6.953-1.1H7.036V10.6h1.943zm0-3.237H7.036V5.418h1.943z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Warning;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Warning = Warning;
  }
})(this)
