(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var BankPending = function BankPending() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-bank-pending" },
  React.createElement(
    "title",
    { id: "title" },
    "bank-pending icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M12.557 11.179V9.476h-.985v2.307l1.491.669.444-.864-.95-.409z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M12.117 7.435a3.915 3.915 0 1 0 3.915 3.915 3.915 3.915 0 0 0-3.915-3.915zm0 6.7A2.784 2.784 0 1 1 14.9 11.35a2.784 2.784 0 0 1-2.783 2.784zm-4.25-7.694a1.975 1.975 0 0 0-.59 3.861 4.883 4.883 0 0 1 .468-1.236.662.662 0 0 1-.545-.646.671.671 0 0 1 .671-.67.647.647 0 0 1 .559.325 4.967 4.967 0 0 1 .985-.867 1.96 1.96 0 0 0-1.548-.767zm-3.981-.487v4.933h1.266V5.954zm-1.833 0v4.933h1.265V5.954zm-.458 6.766h5.782a4.89 4.89 0 0 1-.206-1.266H1.595zm14.054-7.657L7.941.35a.173.173 0 0 0-.183 0L.083 5.063a.175.175 0 0 0 .092.324h15.383a.175.175 0 0 0 .091-.324zM3.817 4.121L7.85 1.844l4.033 2.277zm6.754 2.544a4.9 4.9 0 0 1 1.267-.243v-.476h-1.267zM.359 13.287v1.266h8.008a4.941 4.941 0 0 1-.811-1.266zM12.4 6.423a4.9 4.9 0 0 1 1.267.245v-.722H12.4z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = BankPending;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.BankPending = BankPending;
  }
})(this)
