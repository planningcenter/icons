(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Discount = function Discount() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-discount" },
  React.createElement(
    "title",
    { id: "title" },
    "discount icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M10.32,5a3.39,3.39,0,0,0-1.05-.83A2.83,2.83,0,0,0,8,3.84a2.86,2.86,0,0,0-1.3.3A3.37,3.37,0,0,0,5.62,5a3.91,3.91,0,0,0-.71,1.24,4.68,4.68,0,0,0,0,3.06,3.92,3.92,0,0,0,.71,1.24,3.39,3.39,0,0,0,1.06.83,2.91,2.91,0,0,0,2.59,0,3.39,3.39,0,0,0,1.06-.83A4.16,4.16,0,0,0,11,9.27a4.48,4.48,0,0,0,0-3.06A4.15,4.15,0,0,0,10.32,5ZM10,10H6.16V9h1.2V6.4s-.57.55-.57.55L6,6.17l1.54-1.3H8.74V9H10Zm1.17-8.28H9V2.95h2.17ZM9,13.75h2.17v-1.2H9ZM15.86,2a.61.61,0,0,0-.52-.3H13.61V2.95h1V4.1H16V2.34A.52.52,0,0,0,15.86,2ZM3.76,11.61a2.43,2.43,0,0,0-.57-.76,2.72,2.72,0,0,0-.85-.51,2.82,2.82,0,0,0-1-.19V5.35a2.82,2.82,0,0,0,1-.19,2.72,2.72,0,0,0,.85-.51,2.44,2.44,0,0,0,.57-.76A2.11,2.11,0,0,0,4,2.95H6.47V1.74H.66a.69.69,0,0,0-.48.18A.54.54,0,0,0,0,2.34v10.8a.56.56,0,0,0,.19.43.69.69,0,0,0,.48.18H6.47v-1.2H4A2.11,2.11,0,0,0,3.76,11.61ZM14.61,8.67H16V6.59H14.61Zm0,3.87h-1v1.2h1.73a.61.61,0,0,0,.54-.33.56.56,0,0,0,.08-.28v-2H14.61Z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Discount;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Discount = Discount;
  }
})(this)
