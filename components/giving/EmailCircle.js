(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var EmailCircle = function EmailCircle() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-email-circle" },
  React.createElement(
    "title",
    { id: "title" },
    "email-circle icon"
  ),
  React.createElement("path", { d: "M8 2.044A5.956 5.956 0 1 1 2.076 8 5.947 5.947 0 0 1 8 2.044M8 .459A7.541 7.541 0 1 0 15.5 8 7.521 7.521 0 0 0 8 .459z", role: "presentation" }),
  React.createElement("path", { d: "M4.325 6.4l3.333 1.613a.555.555 0 0 0 .423 0l3.595-1.776a.185.185 0 0 0 .1-.166.519.519 0 0 0-.516-.519H4.744a.526.526 0 0 0-.523.525v.153a.185.185 0 0 0 .104.17zm7.12.775l-3.036 1.5a1.28 1.28 0 0 1-1.059 0l-2.8-1.352a.232.232 0 0 0-.333.21v2.41a.506.506 0 0 0 .5.506h6.494a.563.563 0 0 0 .56-.563V7.38a.232.232 0 0 0-.326-.209z", fill: "#231f20", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EmailCircle;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.EmailCircle = EmailCircle;
  }
})(this)