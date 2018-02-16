(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Check = function Check() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-check", role: "img", className: "symbol symbol-check" },
  React.createElement(
    "title",
    { id: "title-check" },
    "check icon"
  ),
  React.createElement("path", { d: "M15.774 4.475l-2.646-2.713a.242.242 0 0 0-.349 0l-6.51 6.674a.242.242 0 0 1-.349 0L3.127 5.573a.243.243 0 0 0-.35 0L.229 8.185a.258.258 0 0 0 0 .358l5.81 5.911a.244.244 0 0 0 .35 0l9.384-9.621a.257.257 0 0 0 .001-.358z", "fill-rule": "evenodd", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Check;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Check = Check;
  }
})(this)
