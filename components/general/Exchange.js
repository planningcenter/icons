(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Exchange = function Exchange() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-exchange", role: "img", className: "symbol symbol-exchange" },
  React.createElement(
    "title",
    { id: "title-exchange" },
    "exchange icon"
  ),
  React.createElement("path", { d: "M14.224 9.412v2.441a.814.814 0 0 1-.814.814H3.644", fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", role: "presentation" }),
  React.createElement("path", { d: "M2.141 12.615l2.614 2.39v-4.779l-2.614 2.389z", role: "presentation" }),
  React.createElement("path", { d: "M3.644 8.6V6.157a.814.814 0 0 1 .814-.814h9.766", fill: "none", stroke: "#000", "stroke-miterlimit": "10", "stroke-width": "1.5", role: "presentation" }),
  React.createElement("path", { d: "M15.727 5.395l-2.614-2.39v4.779l2.614-2.389z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Exchange;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.Exchange = Exchange;
  }
})(this)
