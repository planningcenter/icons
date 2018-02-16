(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var MobilePhone = function MobilePhone() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-mobile-phone", role: "img", className: "symbol symbol-mobile-phone" },
  React.createElement(
    "title",
    { id: "title-mobile-phone" },
    "mobile-phone icon"
  ),
  React.createElement("path", { d: "M12.5 3.505v11h-7v-11h7m.5-1.5H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1z", role: "presentation" }),
  React.createElement("path", { d: "M5 2.005h8v3H5zm0 11h8v3H5z", role: "presentation" }),
  React.createElement("rect", { x: "8.25", y: "13.755", width: "1.5", height: "1.5", rx: ".75", ry: ".75", fill: "#fff" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = MobilePhone;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.MobilePhone = MobilePhone;
  }
})(this)
