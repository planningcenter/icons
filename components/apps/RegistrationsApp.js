(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var RegistrationsApp = function RegistrationsApp() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title", role: "img", className: "symbol symbol-registrations-app" },
  React.createElement(
    "title",
    { id: "title" },
    "registrations-app icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M20.52 13.131l-2.677-2.425-1.782 1.945 2.658 2.459 1.801-1.979zm-5.013.125l-5.177 5.651a2.029 2.029 0 0 0-.4.86l-.36 2.666 2.621-.578a2 2 0 0 0 .819-.473l5.159-5.666zm-1.009 8.916h7.661v-1.513h-6.284l-1.377 1.513z", role: "presentation" }),
  React.createElement("path", { "class": "cls-1", d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.541v1.517a.753.753 0 0 0 .753.753h9.845a.753.753 0 0 0 .753-.753V5.027h4.541a.757.757 0 0 1 .757.757z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = RegistrationsApp;
  } else {
    global.AppsIcon = global.AppsIcon || {};
    global.AppsIcon.RegistrationsApp = RegistrationsApp;
  }
})(this)
