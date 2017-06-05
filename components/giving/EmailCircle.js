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
  React.createElement("path", { d: "M3.7 6.124l3.9 1.892a.649.649 0 0 0 .5 0l4.2-2.079a.217.217 0 0 0 .12-.194.607.607 0 0 0-.6-.607H4.191a.615.615 0 0 0-.612.615v.179a.216.216 0 0 0 .121.194zm8.329.906l-3.55 1.757a1.482 1.482 0 0 1-.621.136 1.5 1.5 0 0 1-.618-.133L3.968 7.208a.271.271 0 0 0-.389.246v2.819a.592.592 0 0 0 .589.592h7.6a.659.659 0 0 0 .656-.658V7.275a.271.271 0 0 0-.394-.245z", fill: "#231f20", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EmailCircle;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.EmailCircle = EmailCircle;
  }
})(this)
