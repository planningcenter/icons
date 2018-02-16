(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Phone = function Phone() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-phone", role: "img", className: "symbol symbol-phone" },
  React.createElement(
    "title",
    { id: "title-phone" },
    "phone icon"
  ),
  React.createElement("path", { d: "M12.679 14.3a1.7 1.7 0 0 1-1.7 1.7h-5.9a1.7 1.7 0 0 1-1.7-1.7V1.7A1.7 1.7 0 0 1 5.074 0h5.9a1.7 1.7 0 0 1 1.7 1.7v12.6zm-.771-10.951H4.122v9.175h7.786zM9.581 1.7a.189.189 0 0 0-.189-.188H6.658a.188.188 0 0 0-.189.188.189.189 0 0 0 .189.189h2.734a.189.189 0 0 0 .189-.189zM5.943 13.883a.4.4 0 1 0 .4.4.4.4 0 0 0-.4-.4zm2.082 0a.4.4 0 1 0 .4.4.4.4 0 0 0-.4-.4zm2.081 0a.4.4 0 1 0 .4.4.4.4 0 0 0-.4-.4z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Phone;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Phone = Phone;
  }
})(this)
