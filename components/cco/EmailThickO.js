(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var EmailThickO = function EmailThickO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-email-thick-o" },
  React.createElement(
    "title",
    { id: "title" },
    "email-thick-o icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M15.905 2.88a.943.943 0 0 0-.042-.209.936.936 0 0 0-.1-.174.913.913 0 0 0-.07-.125c-.008-.009-.02-.013-.028-.022a.965.965 0 0 0-.167-.129.973.973 0 0 0-.139-.094.977.977 0 0 0-.168-.045.966.966 0 0 0-.2-.041c-.012 0-.022-.007-.034-.007H.961a.974.974 0 0 0-.219.044 1 1 0 0 0-.153.034 1.01 1.01 0 0 0-.089.064.974.974 0 0 0-.223.157l-.012.008a.922.922 0 0 0-.078.124.947.947 0 0 0-.115.185.952.952 0 0 0-.046.229.918.918 0 0 0-.026.132v10.014A.975.975 0 0 0 .975 14h13.982a.975.975 0 0 0 .975-.975V3.011a.92.92 0 0 0-.027-.131zm-3.564 1.106L7.688 8.013 3.426 3.986zM1.949 12.05V5.273l5.041 4.763a.974.974 0 0 0 1.308.029l5.685-4.921v6.906z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EmailThickO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.EmailThickO = EmailThickO;
  }
})(this)
