(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Cc = function Cc() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-cc" },
  React.createElement(
    "title",
    { id: "title" },
    "cc icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M5.177 10.18h2.049v1.165H5.177zm-2.678 0h2.049v1.165H2.499zm9.509-1.892A1.516 1.516 0 0 0 11 8.674a1.529 1.529 0 1 0 0 2.285 1.526 1.526 0 1 0 1.006-2.671z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M15.388 1.741H.623a.606.606 0 0 0-.535.332.522.522 0 0 0-.076.262v10.8a.578.578 0 0 0 .045.221v.016a.611.611 0 0 0 .561.37h14.77a.612.612 0 0 0 .612-.605V2.353a.612.612 0 0 0-.612-.612zm-.738 3.632H1.361V3.091H14.65zM1.361 12.4V6.867H14.65V12.4z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Cc;
  } else {
    global.RegistrationsIcon = global.RegistrationsIcon || {};
    global.RegistrationsIcon.Cc = Cc;
  }
})(this)
