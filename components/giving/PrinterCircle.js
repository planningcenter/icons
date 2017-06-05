(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PrinterCircle = function PrinterCircle() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-printer-circle" },
  React.createElement(
    "title",
    { id: "title" },
    "printer-circle icon"
  ),
  React.createElement("path", { d: "M8 2.044A5.956 5.956 0 1 1 2.076 8 5.947 5.947 0 0 1 8 2.044M8 .459A7.541 7.541 0 1 0 15.5 8 7.521 7.521 0 0 0 8 .459z", role: "presentation" }),
  React.createElement("path", { d: "M11.742 10.313l-.009-2.9a.718.718 0 0 0-.718-.716h-.648V6L8.645 4.592H5.631V6.7h-.655a.718.718 0 0 0-.718.72l.009 2.9h1.364v1.094h4.736v-1.101zM6.13 5.083h2.193v1.192H9.9v1.311H6.13v-2.5zM9.9 10.9H6.13V9.616H9.9V10.9z", fill: "#010101", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PrinterCircle;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.PrinterCircle = PrinterCircle;
  }
})(this)
