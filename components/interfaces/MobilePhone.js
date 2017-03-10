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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-mobile-phone" },
  React.createElement(
    "title",
    { id: "title" },
    "mobile-phone icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M12.57 14.2a1.7 1.7 0 0 1-1.7 1.7h-5.9a1.7 1.7 0 0 1-1.7-1.7V1.607a1.7 1.7 0 0 1 1.7-1.7h5.9a1.7 1.7 0 0 1 1.7 1.7V14.2zM11.8 3.253H4.013v9.175H11.8zM9.472 1.607a.189.189 0 0 0-.188-.188H6.549a.188.188 0 0 0-.189.188.189.189 0 0 0 .189.189h2.735a.189.189 0 0 0 .188-.189zM5.834 13.786a.4.4 0 1 0 .4.4.4.4 0 0 0-.4-.4zm2.082 0a.4.4 0 1 0 .4.4.4.4 0 0 0-.399-.4zm2.081 0a.4.4 0 1 0 .4.4.4.4 0 0 0-.397-.4z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = MobilePhone;
  } else {
    global.InterfacesIcon = global.InterfacesIcon || {};
    global.InterfacesIcon.MobilePhone = MobilePhone;
  }
})(this)