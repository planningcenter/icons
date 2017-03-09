(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var BankConfirmed = function BankConfirmed() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-bank-confirmed" },
  React.createElement(
    "title",
    { id: "title" },
    "bank-confirmed icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M13.8 5.946h-1.262v3.923L13.8 8.6zm-9.785.008v4.933h1.271V5.954zM1.728 12.72H7.4l-1.425-1.266H1.728zm.458-6.766v4.933h1.266V5.954zm8.514 4.281l.644.644h.179l.443-.443v-4.49H10.7zm2.93 4.318h1.873v-1.266h-.621zm-5.668-1.266H.493v1.266h8.73l-.69-.7zM8 6.441A1.979 1.979 0 1 0 9.979 8.42 1.981 1.981 0 0 0 8 6.441zM8 9.09a.67.67 0 1 1 .67-.67.671.671 0 0 1-.67.67zm7.782-4.027L8.075.35a.173.173 0 0 0-.183 0L.216 5.063a.175.175 0 0 0 .092.324h15.384a.175.175 0 0 0 .091-.324zM3.951 4.121l4.033-2.277 4.033 2.277z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M15.625 10.763l-1.107-1.107-3.08 3.08-1.398-1.398-1.13 1.129 1.399 1.399-.003.003 1.106 1.106.003-.003.024.023 4.186-4.232z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = BankConfirmed;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.BankConfirmed = BankConfirmed;
  }
})(this)
