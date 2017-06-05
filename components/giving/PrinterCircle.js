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
  React.createElement("path", { d: "M12.053 10.505l-.009-3.141a.778.778 0 0 0-.778-.776h-.7v-.754L8.7 4.309H5.434v2.28h-.709a.778.778 0 0 0-.778.78l.009 3.136h1.478v1.185h5.129v-1.185zM5.975 4.84h2.374v1.291h1.712v1.421H5.975V4.84zm4.086 6.3H5.975V9.75h4.086v1.386z", fill: "#010101", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PrinterCircle;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.PrinterCircle = PrinterCircle;
  }
})(this)
