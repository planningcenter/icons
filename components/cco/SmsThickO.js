(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var SmsThickO = function SmsThickO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-sms-thick-o" },
  React.createElement(
    "title",
    { id: "title" },
    "sms-thick-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M8 .088A7.941 7.941 0 0 0 .9 11.553l-.8 3.178a.991.991 0 0 0 1.2 1.2l3.178-.794A7.936 7.936 0 1 0 8 .088zM8 13.98a5.959 5.959 0 0 1-2.909-.759.987.987 0 0 0-.725-.1l-1.942.485.485-1.942a.99.99 0 0 0-.1-.726A5.946 5.946 0 1 1 8 13.98z", role: "presentation" }),
    React.createElement("circle", { "class": "cls-1", cx: "5.405", cy: "8.109", r: ".983" }),
    React.createElement("circle", { "class": "cls-1", cx: "8", cy: "8.109", r: ".983" }),
    React.createElement("circle", { "class": "cls-1", cx: "10.595", cy: "8.109", r: ".983" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = SmsThickO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.SmsThickO = SmsThickO;
  }
})(this)
