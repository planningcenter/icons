(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Eye = function Eye() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-eye" },
  React.createElement(
    "title",
    { id: "title" },
    "eye icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M8.169 6.519a1.923 1.923 0 1 0 1.877 1.922 1.9 1.9 0 0 0-1.877-1.922zm6.866 1.589c-1.816-2.8-4.254-4.335-6.866-4.335S3.119 5.313 1.3 8.108a.614.614 0 0 0 0 .666c1.815 2.8 4.254 4.335 6.866 4.335s5.05-1.539 6.866-4.335a.614.614 0 0 0 .002-.666zm-6.866 3.8c-2.1 0-4.1-1.227-5.663-3.465C4.066 6.2 6.065 4.977 8.169 4.977s4.1 1.227 5.663 3.465c-1.561 2.237-3.56 3.464-5.663 3.464z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Eye;
  } else {
    global.RegistrationsIcon = global.RegistrationsIcon || {};
    global.RegistrationsIcon.Eye = Eye;
  }
})(this)
