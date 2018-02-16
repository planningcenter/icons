(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Iphone = function Iphone() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-iphone", role: "img", className: "symbol symbol-iphone" },
  React.createElement(
    "title",
    { id: "title-iphone" },
    "iphone icon"
  ),
  React.createElement("path", { d: "M11.175 1.362H5.086a1.728 1.728 0 0 0-1.7 1.754v10.075a1.707 1.707 0 0 0 1.7 1.715h6.089a1.707 1.707 0 0 0 1.695-1.715V3.116a1.727 1.727 0 0 0-1.695-1.754zM7.461 13.229a.677.677 0 1 1 .677.677.677.677 0 0 1-.677-.677zm4.105-1.659H4.7V3.116a.4.4 0 0 1 .39-.4h6.089a.4.4 0 0 1 .391.4z", "fill-rule": "evenodd", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Iphone;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Iphone = Iphone;
  }
})(this)
