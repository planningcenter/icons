(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Logout = function Logout() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-logout" },
  React.createElement(
    "title",
    { id: "title" },
    "logout icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M13.585 7.246a1.115 1.115 0 0 1 .568.427 1.176 1.176 0 0 1 .216.7v6.363a1.146 1.146 0 0 1-.353.833 1.125 1.125 0 0 1-.827.357H2.822a1.142 1.142 0 0 1-.834-.357 1.134 1.134 0 0 1-.357-.833V8.374a1.176 1.176 0 0 1 .218-.7 1.152 1.152 0 0 1 .576-.427V5.579a5.441 5.441 0 0 1 .435-2.165 5.708 5.708 0 0 1 1.195-1.778A5.6 5.6 0 0 1 5.834.437a5.591 5.591 0 0 1 4.335 0 5.6 5.6 0 0 1 2.979 2.984 5.438 5.438 0 0 1 .435 2.158v1.667zm-2.4-1.667a3.118 3.118 0 0 0-.935-2.256 3.283 3.283 0 0 0-1.02-.676A3.1 3.1 0 0 0 8.005 2.4a3.06 3.06 0 0 0-1.24.249 3.424 3.424 0 0 0-1.012.676 3.053 3.053 0 0 0-.69 1.012 3.137 3.137 0 0 0-.249 1.244v1.585h6.371zm-2.541 5.794a1.362 1.362 0 0 0 .451-.46 1.194 1.194 0 0 0 .177-.624 1.257 1.257 0 0 0-.372-.905 1.244 1.244 0 0 0-1.791 0 1.249 1.249 0 0 0-.371.905 1.207 1.207 0 0 0 .171.624 1.181 1.181 0 0 0 .449.443l-.62 2.538h2.534z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Logout;
  } else {
    global.ServicesIcon = global.ServicesIcon || {};
    global.ServicesIcon.Logout = Logout;
  }
})(this)
