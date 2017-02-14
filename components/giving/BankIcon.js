(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var BankIcon = function BankIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-bank" },
  React.createElement(
    "title",
    { id: "title" },
    "bank icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M4.019 5.954h1.267v4.933H4.019zm-1.833 0h1.266v4.933H2.186zM9.979 8.42A1.979 1.979 0 1 0 8 10.4a1.981 1.981 0 0 0 1.979-1.98zm-2.649 0a.67.67 0 1 1 .67.67.671.671 0 0 1-.67-.67zm8.453-3.357L8.075.35a.173.173 0 0 0-.183 0L.216 5.063a.175.175 0 0 0 .092.324h15.384a.175.175 0 0 0 .091-.324zM3.951 4.121l4.033-2.277 4.033 2.277zm-2.223 7.333h12.545v1.266H1.728zm8.987-5.5h1.267v4.933h-1.267zm1.834 0h1.266v4.933h-1.266zM.493 13.287h15.016v1.266H.493z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = BankIcon
  } else {
    global.BankIcon = BankIcon
  }
})(this)